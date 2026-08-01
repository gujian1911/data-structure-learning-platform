# -*- coding: utf-8 -*-
"""步骤1：PPT -> PPTX（WPS COM）"""
import os, sys, time
import win32com.client
import pythoncom

PPT_PATH = r"c:\Users\xuhui\Desktop\基于AIGC知识库的数据结构课程学习平台\ppt\第二章-线性表.ppt"
PPTX_PATH = r"c:\Users\xuhui\Desktop\基于AIGC知识库的数据结构课程学习平台\slides\ch2\_fixed.pptx"

print("[1] 转换 PPT -> PPTX...")
pythoncom.CoInitialize()
ppt_app = win32com.client.Dispatch("PowerPoint.Application")
ppt_app.Visible = 1
pres = ppt_app.Presentations.Open(PPT_PATH, WithWindow=False)
pres.SaveAs(PPTX_PATH, 24)
pres.Close()
ppt_app.Quit()
pythoncom.CoUninitialize()
time.sleep(2)
print("    PPTX 已生成:", PPTX_PATH)
