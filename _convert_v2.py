# -*- coding: utf-8 -*-
"""PPT -> PPTX -> PDF -> PNG 三步转换
   解决WPS直接渲染旧版PPT格式时文字叠加问题
"""
import os
import sys
import shutil
import time

PPT_PATH = sys.argv[1] if len(sys.argv) > 1 else r"c:\Users\xuhui\Desktop\基于AIGC知识库的数据结构课程学习平台\ppt\第二章-线性表.ppt"
OUT_DIR  = sys.argv[2] if len(sys.argv) > 2 else r"c:\Users\xuhui\Desktop\基于AIGC知识库的数据结构课程学习平台\slides\ch2"
ZOOM = 3.0  # 高分辨率渲染

TEMP_PPTX = os.path.join(OUT_DIR, "_temp.pptx")
PDF_PATH  = os.path.join(OUT_DIR, "_temp.pdf")

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
print("[0/4] 已清理旧幻灯片图片")

# ============ 第1步：PPT -> PPTX ============
print("[1/4] 正在将 PPT 转换为 PPTX...")
try:
    import win32com.client
    import pythoncom

    pythoncom.CoInitialize()
    ppt_app = win32com.client.Dispatch("PowerPoint.Application")
    ppt_app.Visible = 1

    pres = ppt_app.Presentations.Open(PPT_PATH, WithWindow=False)
    slide_count = pres.Slides.Count
    print(f"       幻灯片总数: {slide_count}")

    # 24 = ppSaveAsOpenXMLPresentation (PPTX)
    pres.SaveAs(TEMP_PPTX, 24)
    pres.Close()
    print(f"       PPTX 已生成: {TEMP_PPTX}")

    # ============ 第2步：PPTX -> PDF ============
    print("[2/4] 正在将 PPTX 转换为 PDF...")
    pres2 = ppt_app.Presentations.Open(TEMP_PPTX, WithWindow=False)
    # 32 = ppSaveAsPDF
    pres2.SaveAs(PDF_PATH, 32)
    pres2.Close()
    ppt_app.Quit()
    pythoncom.CoUninitialize()
    time.sleep(1)
    print(f"       PDF 已生成: {PDF_PATH}")
except Exception as e:
    print(f"[错误] 转换失败: {e}")
    import traceback
    traceback.print_exc()
    try:
        ppt_app.Quit()
    except:
        pass
    sys.exit(1)

# ============ 第3步：PDF -> PNG ============
print(f"[3/4] 正在将 PDF 渲染为高清 PNG（缩放 {ZOOM}x）...")
try:
    import fitz  # PyMuPDF

    doc = fitz.open(PDF_PATH)
    total = len(doc)
    print(f"       PDF 页数: {total}")

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
for f in [TEMP_PPTX, PDF_PATH]:
    if os.path.exists(f):
        os.remove(f)

print(f"[4/4] 完成！共 {total} 张高清幻灯片已生成。")
