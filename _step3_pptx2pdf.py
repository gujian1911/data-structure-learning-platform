# -*- coding: utf-8 -*-
"""步骤3：PPTX -> PDF（WPS COM）"""
import os, time
import win32com.client
import pythoncom

PPTX_PATH = r"c:\Users\xuhui\Desktop\基于AIGC知识库的数据结构课程学习平台\slides\ch2\_fixed.pptx"
PDF_PATH  = r"c:\Users\xuhui\Desktop\基于AIGC知识库的数据结构课程学习平台\slides\ch2\_temp.pdf"

print("[3] 转换 PPTX -> PDF...")
pythoncom.CoInitialize()
ppt_app = win32com.client.Dispatch("PowerPoint.Application")
ppt_app.Visible = 1
pres = ppt_app.Presentations.Open(PPTX_PATH, WithWindow=False)
pres.SaveAs(PDF_PATH, 32)
pres.Close()
ppt_app.Quit()
pythoncom.CoUninitialize()
time.sleep(2)
print("    PDF 已生成:", PDF_PATH)
