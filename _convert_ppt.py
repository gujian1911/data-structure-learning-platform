# -*- coding: utf-8 -*-
"""将PPT导出为高清PNG幻灯片图片（使用PowerPoint COM接口，逐张Slide.Export）"""
import os
import sys
import shutil
import time

# ===== 配置（可通过命令行参数覆盖）=====
# 用法: python _convert_ppt.py [PPT路径] [输出目录]
PPT_PATH = sys.argv[1] if len(sys.argv) > 1 else r"c:\Users\xuhui\Desktop\基于AIGC知识库的数据结构课程学习平台\ppt\数据结构第二章-线性表1.ppt"
OUT_DIR  = sys.argv[2] if len(sys.argv) > 2 else r"c:\Users\xuhui\Desktop\基于AIGC知识库的数据结构课程学习平台\slides\ch2"

print("=" * 60)
print("PPT 文件:", PPT_PATH)
print("输出目录:", OUT_DIR)
print("=" * 60)

if not os.path.exists(PPT_PATH):
    print("[错误] PPT 文件不存在！")
    sys.exit(1)

os.makedirs(OUT_DIR, exist_ok=True)

# 清空输出目录中的旧幻灯片
for f in os.listdir(OUT_DIR):
    if f.startswith("slide_") and f.endswith(".png"):
        os.remove(os.path.join(OUT_DIR, f))
print("[0/3] 已清理旧幻灯片图片")

try:
    import win32com.client
    import pythoncom

    pythoncom.CoInitialize()
    ppt_app = win32com.client.Dispatch("PowerPoint.Application")
    ppt_app.Visible = 1  # 必须可见才能导出

    print("[1/3] 正在打开PPT...")
    pres = ppt_app.Presentations.Open(PPT_PATH, WithWindow=False)
    slide_count = pres.Slides.Count
    print(f"       幻灯片总数: {slide_count}")

    # 读取原始幻灯片尺寸（磅），按比例放大到宽度1920
    orig_w = pres.PageSetup.SlideWidth
    orig_h = pres.PageSetup.SlideHeight
    scale = 1920.0 / orig_w
    EXPORT_W = int(orig_w * scale)
    EXPORT_H = int(orig_h * scale)
    print(f"       原始尺寸: {orig_w}x{orig_h}, 导出尺寸: {EXPORT_W}x{EXPORT_H}")

    print(f"[2/3] 正在以高分辨率导出 {slide_count} 张幻灯片...")
    for i in range(1, slide_count + 1):
        slide = pres.Slides(i)
        out_path = os.path.join(OUT_DIR, f"slide_{str(i).zfill(3)}.png")
        slide.Export(out_path, "PNG", EXPORT_W, EXPORT_H)
        print(f"       slide_{str(i).zfill(3)}.png")
        del slide

    pres.Close()
    ppt_app.Quit()
    pythoncom.CoUninitialize()
    time.sleep(1)

    print(f"[3/3] 完成！共 {slide_count} 张高清幻灯片已更新。")
    print(f"      请确认 ch2.html 中 totalSlides = {slide_count}")

except Exception as e:
    print(f"[错误] 导出失败: {e}")
    import traceback
    traceback.print_exc()
    try:
        ppt_app.Quit()
    except:
        pass
    sys.exit(1)
