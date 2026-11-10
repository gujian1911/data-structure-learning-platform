# -*- coding: utf-8 -*-
"""
数据结构课程学习平台 - 本地服务
功能：
1. 静态托管整个网站（等价于 python -m http.server）
2. 账号体系（本地 SQLite）：
   - POST /api/register   注册（注册后自动登录）
   - POST /api/login      登录
   - POST /api/logout     退出
   - GET  /api/me         获取当前登录用户
3. 知识库「我的知识库」按用户隔离存储：
   - GET    /api/knowledge        获取当前用户的知识列表
   - POST   /api/knowledge        新增一条（需登录）
   - DELETE /api/knowledge/<id>   删除一条（只能删自己的）
数据库文件：knowledge.db（自动创建）
"""
import os
import secrets
import sqlite3
import time

from flask import Flask, g, jsonify, request, send_from_directory
from werkzeug.security import check_password_hash, generate_password_hash

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(BASE_DIR, "knowledge.db")

app = Flask(__name__, static_folder=None)

CHAPTER_NAMES = ["绪论", "线性表", "栈和队列", "串", "数组和广义表", "树", "图", "查找", "排序", "其他"]

SESSION_COOKIE = "ds_session"
SESSION_MAX_AGE = 30 * 24 * 3600  # 30 天


# ---------- 数据库 ----------
def get_db():
    if "db" not in g:
        g.db = sqlite3.connect(DB_PATH)
        g.db.row_factory = sqlite3.Row
    return g.db


@app.teardown_appcontext
def close_db(exc):
    db = g.pop("db", None)
    if db is not None:
        db.close()


def init_db():
    conn = sqlite3.connect(DB_PATH)
    conn.execute(
        """
        CREATE TABLE IF NOT EXISTS users (
            id TEXT PRIMARY KEY,
            username TEXT NOT NULL UNIQUE,
            password_hash TEXT NOT NULL,
            created_at INTEGER
        )
        """
    )
    conn.execute(
        """
        CREATE TABLE IF NOT EXISTS sessions (
            token TEXT PRIMARY KEY,
            user_id TEXT NOT NULL,
            created_at INTEGER
        )
        """
    )
    conn.execute(
        """
        CREATE TABLE IF NOT EXISTS custom_knowledge (
            id TEXT PRIMARY KEY,
            chapter INTEGER NOT NULL DEFAULT 0,
            chapter_name TEXT,
            question TEXT NOT NULL,
            answer TEXT NOT NULL,
            keywords TEXT,
            created_at INTEGER
        )
        """
    )
    # 老数据库迁移：补 user_id 字段
    cols = [r[1] for r in conn.execute("PRAGMA table_info(custom_knowledge)").fetchall()]
    if "user_id" not in cols:
        conn.execute("ALTER TABLE custom_knowledge ADD COLUMN user_id TEXT")
    conn.commit()
    conn.close()


def row_to_item(row):
    return {
        "id": row["id"],
        "chapter": row["chapter"],
        "chapterName": row["chapter_name"],
        "question": row["question"],
        "answer": row["answer"],
        "keywords": row["keywords"] or "",
        "isCustom": True,
    }


def current_user():
    token = request.cookies.get(SESSION_COOKIE)
    if not token:
        return None
    row = get_db().execute(
        "SELECT u.id, u.username FROM sessions s JOIN users u ON u.id = s.user_id WHERE s.token = ?",
        (token,),
    ).fetchone()
    return {"id": row["id"], "username": row["username"]} if row else None


def login_user(user_id, username):
    token = secrets.token_hex(24)
    db = get_db()
    db.execute(
        "INSERT INTO sessions (token, user_id, created_at) VALUES (?, ?, ?)",
        (token, user_id, int(time.time() * 1000)),
    )
    db.commit()
    resp = jsonify({"id": user_id, "username": username})
    resp.set_cookie(SESSION_COOKIE, token, max_age=SESSION_MAX_AGE, httponly=True, samesite="Lax")
    return resp


# ---------- 账号接口 ----------
@app.post("/api/register")
def api_register():
    data = request.get_json(force=True, silent=True) or {}
    username = (data.get("username") or "").strip()
    password = data.get("password") or ""
    if len(username) < 2 or len(username) > 20:
        return jsonify({"error": "用户名长度需为 2-20 个字符"}), 400
    if len(password) < 4:
        return jsonify({"error": "密码至少 4 位"}), 400

    db = get_db()
    exists = db.execute("SELECT id FROM users WHERE username = ?", (username,)).fetchone()
    if exists:
        return jsonify({"error": "该用户名已被注册"}), 409

    user_id = "u_" + str(int(time.time() * 1000)) + "_" + secrets.token_hex(3)
    db.execute(
        "INSERT INTO users (id, username, password_hash, created_at) VALUES (?, ?, ?, ?)",
        (user_id, username, generate_password_hash(password), int(time.time() * 1000)),
    )
    db.commit()
    return login_user(user_id, username)


@app.post("/api/login")
def api_login():
    data = request.get_json(force=True, silent=True) or {}
    username = (data.get("username") or "").strip()
    password = data.get("password") or ""
    row = get_db().execute(
        "SELECT id, username, password_hash FROM users WHERE username = ?", (username,)
    ).fetchone()
    if not row or not check_password_hash(row["password_hash"], password):
        return jsonify({"error": "用户名或密码错误"}), 401
    return login_user(row["id"], row["username"])


@app.post("/api/logout")
def api_logout():
    token = request.cookies.get(SESSION_COOKIE)
    if token:
        db = get_db()
        db.execute("DELETE FROM sessions WHERE token = ?", (token,))
        db.commit()
    resp = jsonify({"ok": True})
    resp.delete_cookie(SESSION_COOKIE)
    return resp


@app.get("/api/me")
def api_me():
    user = current_user()
    if not user:
        return jsonify({"error": "未登录"}), 401
    return jsonify(user)


# ---------- 知识库接口 ----------
@app.get("/api/knowledge")
def api_list():
    user = current_user()
    if not user:
        return jsonify({"error": "未登录"}), 401
    rows = get_db().execute(
        "SELECT * FROM custom_knowledge WHERE user_id = ? ORDER BY created_at ASC",
        (user["id"],),
    ).fetchall()
    return jsonify([row_to_item(r) for r in rows])


@app.post("/api/knowledge")
def api_create():
    user = current_user()
    if not user:
        return jsonify({"error": "请先登录"}), 401

    data = request.get_json(force=True, silent=True) or {}
    question = (data.get("question") or "").strip()
    answer = (data.get("answer") or "").strip()
    if not question or not answer:
        return jsonify({"error": "问题和答案不能为空"}), 400

    try:
        chapter = int(data.get("chapter", 0))
    except (TypeError, ValueError):
        chapter = 0
    if chapter < 0 or chapter >= len(CHAPTER_NAMES):
        chapter = len(CHAPTER_NAMES) - 1

    keywords = (data.get("keywords") or "").strip()
    item_id = "c_" + str(int(time.time() * 1000))
    chapter_name = CHAPTER_NAMES[chapter]
    created_at = int(time.time() * 1000)

    db = get_db()
    db.execute(
        "INSERT INTO custom_knowledge (id, chapter, chapter_name, question, answer, keywords, created_at, user_id) "
        "VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        (item_id, chapter, chapter_name, question, answer, keywords, created_at, user["id"]),
    )
    db.commit()
    return jsonify({
        "id": item_id,
        "chapter": chapter,
        "chapterName": chapter_name,
        "question": question,
        "answer": answer,
        "keywords": keywords,
        "isCustom": True,
    }), 201


@app.delete("/api/knowledge/<item_id>")
def api_delete(item_id):
    user = current_user()
    if not user:
        return jsonify({"error": "请先登录"}), 401
    db = get_db()
    cur = db.execute(
        "DELETE FROM custom_knowledge WHERE id = ? AND user_id = ?", (item_id, user["id"])
    )
    db.commit()
    if cur.rowcount == 0:
        return jsonify({"error": "未找到该条知识"}), 404
    return jsonify({"ok": True})


# ---------- 静态站点 ----------
@app.after_request
def no_cache_html(resp):
    # 页面改动后浏览器总是拿到最新版本，避免旧导航栏等缓存问题
    path = request.path
    if path.endswith(".html") or path == "/":
        resp.headers["Cache-Control"] = "no-store, must-revalidate"
        resp.headers["Pragma"] = "no-cache"
    return resp


@app.route("/")
def index():
    return send_from_directory(BASE_DIR, "index.html")


@app.route("/<path:path>")
def static_files(path):
    return send_from_directory(BASE_DIR, path)


if __name__ == "__main__":
    init_db()
    print("数据库已就绪: " + DB_PATH)
    print("访问地址: http://localhost:8000/")
    app.run(host="127.0.0.1", port=8000, debug=False)
