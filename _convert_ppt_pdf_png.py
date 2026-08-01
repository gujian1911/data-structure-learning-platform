# -*- coding: utf-8 -*-
"""PPT -> PDF -> PNG 两步转换（解决直接导出PNG时文字叠加、颜色异常问题）
   第1步：PowerPoint COM 将 PPT 另存为 PDF
   第2步：PyMuPDF 将 PDF 每页渲染为高清 PNG
"""
import os
import sys
import shutil
import time

# ===== 配置 =====
PPT_PATH = sys.argv[1] if len(sys.argv) > 1 else r"c:\Users\xuhui\Desktop\基于AIGC知识库的数据结构课程学习平台\ppt\第二章-线性表.ppt"
OUT_DIR  = sys.argv[2] if len(sys.argv) > 2 else r"c:\Users\xuhui\Desktop\基于AIGC知识库的数据结构课程学习平台\slides\ch2"
# 渲染倍率（2.0 = 2倍缩放，约1920px宽）
ZOOM = 2.0

PDF_PATH = os.path.join(OUT_DIR, "_temp.pdf")

print("=" * 60)
print("PPT 文件:", PPT_PATH)
print("输出目录:", OUT_DIR)
print("=" * 60)

if not os.path.exists(PPT_PATH):
    print("[错误] PPT 文件不存在！")
    sys.exit(1)

os.makedirs(OUT_DIR, exist_ok=True)

# 清理旧幻灯片
for f in os.listdir(OUT_DIR):
    if f.startswith("slide_") and f.endswith(".png"):
        os.remove(os.path.join(OUT_DIR, f))
print("[0/3] 已清理旧幻灯片图片")

# ============ 第1步：PPT -> PDF ============
print("[1/3] 正在将 PPT 转换为 PDF...")
try:
    import win32com.client
    import pythoncom

    pythoncom.CoInitialize()
    ppt_app = win32com.client.Dispatch("PowerPoint.Application")
    ppt_app.Visible = 1

    pres = ppt_app.Presentations.Open(PPT_PATH, WithWindow=False)
    slide_count = pres.Slides.Count
    print(f"       幻灯片总数: {slide_count}")

    # 32 = ppSaveAsPDF
    pres.SaveAs(PDF_PATH, 32)
    pres.Close()
    ppt_app.Quit()
    pythoncom.CoUninitialize()
    time.sleep(1)
    print(f"       PDF 已生成: {PDF_PATH}")
except Exception as e:
    print(f"[错误] PPT转PDF失败: {e}")
    try:
        ppt_app.Quit()
    except:
        pass
    sys.exit(1)

# ============ 第2步：PDF -> PNG ============
print(f"[2/3] 正在将 PDF 渲染为高清 PNG（缩放 {ZOOM}x）...")
try:
    import fitz  # PyMuPDF

    doc = fitz.open(PDF_PATH)
    total = len(doc)
    print(f"       PDF 页数: {total}")

    # 创建变换矩阵实现高分辨率渲染
    matrix = fitz.Matrix(ZOOM, ZOOM)

    for i in range(total):
        page = doc[i]
        pix = page.get_pixmap(matrix=matrix, alpha=False)
        out_path = os.path.join(OUT_DIR, f"slide_{str(i + 1).zfill(3)}.png")
        pix.save(out_path)
        print(f"       slide_{str(i + 1).zfill(3)}.png  ({pix.width}x{pix.height})")
        pix = None
        page = None

    doc.close()
except Exception as e:
    print(f"[错误] PDF转PNG失败: {e}")
    import traceback
    traceback.print_exc()
    sys.exit(1)

# ============ 清理 ============
if os.path.exists(PDF_PATH):
    os.remove(PDF_PATH)

print(f"[3/3] 完成！共 {total} 张高清幻灯片已生成。")
print(f"      请确认 ch2.html 中 totalSlides = {total}")
