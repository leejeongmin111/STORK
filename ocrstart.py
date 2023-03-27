import cv2
import matplotlib.pyplot as plt
from func import acprint,hcprint,flprint,crlprint,allprint,flpercent,acpercent,hcpercent,ocrtext
import pytesseract
import json

def runocr():
  pytesseract.pytesseract.tesseract_cmd = r'C:/Program Files/Tesseract-OCR/tesseract.exe'

  img = cv2.imread(r'./image/boundingbox.jpg')




  # if (img.shape[0] <= 70 & img.shape[1] <= 80):
  #   img_resize = cv2.resize(img,(img.shape[1]*2,img.shape[0]*2))
  # else:
  #   img_resize = img
  img_resize = cv2.resize(img, (int(img.shape[1] * 1024 / img.shape[0]), 1024))

  AC = "" 
  FL = ""
  CRL = ""

  for i in range(0,161,10):
      print(i)
      img2 = img_resize.copy()
      gray = cv2.cvtColor(img2, cv2.COLOR_BGR2GRAY)
      ret, th = cv2.threshold(gray, i, 255, cv2.THRESH_BINARY_INV)
      text = pytesseract.image_to_string(th, lang = 'eng')
      if text.find("cm"):
        string_text = ocrtext(text)
        #print(string_text)
        if acprint(string_text) != None or AC == None:
          AC = acprint(string_text)
          print("ac",AC)
        if flprint(string_text) != None or FL == None:
          FL = flprint(string_text)
          print("fl",FL)
        if crlprint(string_text) != None or CRL == None:
          CRL = crlprint(string_text)
          print("crl",CRL)
  result = {"crl" : CRL,"ac": AC,"fl": FL}
  print(result)
  return result