# -*- coding: utf-8 -*-
"""步骤3+4：PPTX -> PDF -> PNG（一次COM调用，然后立即转PNG）"""
import os, sys, time

OUT_DIR  = r"c:\Users\xuhui\Desktop\基于AIGC知识库的数据结构课程学习平台\slides\ch2"
PPTX_PATH = os.path.join(OUT_DIR, "_fixed.pptx")
PDF_PATH  = os.path.join(OUT_DIR, "_temp.pdf")

# ===== PPTX -> PDF =====
print("[3] 转换 PPTX -> PDF...")
import win32com.client
import pythoncom

pythoncom.CoInitialize()
ppt_app = win32com.client.Dispatch("PowerPoint.Application")
ppt_app.Visible = 1
pres = ppt_app.Presentations.Open(PPTX_PATH, WithWindow=False)
pres.SaveAs(PDF_PATH, 32)
pres.Close()
ppt_app.Quit()
pythoncom.CoUninitialize()
time.sleep(3)

if not os.path.exists(PDF_PATH):
    print("[错误] PDF 生成失败！尝试查找...")
    for f in os.listdir(OUT_DIR):
        print(f"  {f}")
    sys.exit(1)

pdf_size = os.path.getsize(PDF_PATH)
print(f"    PDF 已生成: {pdf_size} 字节")

# ===== PDF -> PNG =====
ZOOM = 3.0
print(f"[4] 渲染 PDF -> PNG（{ZOOM}x缩放）...")

# 先清理旧幻灯片
for f in os.listdir(OUT_DIR):
    if f.startswith("slide_") and f.endswith(".png"):
        os.remove(os.path.join(OUT_DIR, f))

import fitz

doc = fitz.open(PDF_PATH)
total = len(doc)
matrix = fitz.Matrix(ZOOM, ZOOM)

for i in range(total):
    page = doc[i]
    pix = page.get_pixmap(matrix=matrix, alpha=False)
    out_path = os.path.join(OUT_DIR, f"slide_{str(i + 1).zfill(3)}.png")
    pix.save(out_path)
    print(f"    slide_{str(i + 1).zfill(3)}.png  ({pix.width}x{pix.height})")
    pix = None
    page = None

doc.close()

# ===== 清理临时文件 =====
for f in [PPTX_PATH, PDF_PATH]:
    if os.path.exists(f):
        os.remove(f)

print(f"\n完成！共 {total} 张幻灯片已生成。")
