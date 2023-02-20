import cv2
import matplotlib.pyplot as plt
from func import acprint,hcprint,flprint,crlprint,allprint,flpercent,acpercent,hcpercent,ocrtext
import pytesseract
import json

def runocr():
  pytesseract.pytesseract.tesseract_cmd = r'C:/Program Files/Tesseract-OCR/tesseract.exe'

  img = cv2.imread(r'./image/boundingbox.jpg')




  if (img.shape[0] <= 70 & img.shape[1] <= 80):
    img_resize = cv2.resize(img, (int(img.shape[1] * 1024 / img.shape[0]), 1024))
  else:
    img_resize = img

  plt.imshow(img_resize)

  HC = None
  AC = None 
  FL = None
  CRL = None

  for i in range(60,155,5):
      print(i)
      img2 = img_resize.copy()
      gray = cv2.cvtColor(img2, cv2.COLOR_BGR2GRAY)
      ret, th = cv2.threshold(gray, i, 255, cv2.THRESH_BINARY_INV)
      text = pytesseract.image_to_string(th, lang = 'eng')
      if text.find("cm"):
        string_text = ocrtext(text)
        if acprint(string_text) != None:
          AC = acprint(string_text)
        if flprint(string_text) != None:
          FL = flprint(string_text)
        if crlprint(string_text) != None:
          CRL = crlprint(string_text)
  result = {"crl" : CRL,"ac":AC,"fl":FL}
  return result