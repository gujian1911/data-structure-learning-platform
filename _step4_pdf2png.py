# -*- coding: utf-8 -*-
"""步骤4：PDF -> PNG（PyMuPDF）+ 清理临时文件"""
import os
import fitz

OUT_DIR  = r"c:\Users\xuhui\Desktop\基于AIGC知识库的数据结构课程学习平台\slides\ch2"
PDF_PATH = os.path.join(OUT_DIR, "_temp.pdf")
PPTX_PATH = os.path.join(OUT_DIR, "_fixed.pptx")
ZOOM = 3.0

# 清理旧幻灯片
for f in os.listdir(OUT_DIR):
    if f.startswith("slide_") and f.endswith(".png"):
        os.remove(os.path.join(OUT_DIR, f))

print(f"[4] 渲染 PDF -> PNG（{ZOOM}x缩放）...")
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

# 清理临时文件
for f in [PPTX_PATH, PDF_PATH]:
    if os.path.exists(f):
        os.remove(f)

print(f"\n完成！共 {total} 张幻灯片已生成。")
