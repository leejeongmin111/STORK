from flask import Flask, render_template
from flask import request, redirect
from tensorflow import keras
import numpy as np
from ocrstart import runocr
from dbModule import Database
from yolov5.yolov5.detect import run
import cv2
from PIL import Image
from yolov5.nlp.nlp import sentiment_predict
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

# model = keras.models.load_model('best_model_GRU.h5')
# model = load_model('model/my_fashion_mnist_model.h5')
 
@app.route('/test', methods =['POST','GET'])
def hello() :
    #temp = model.summary()
    #if request.method =='POST' :
        # test = request.form['id']
        # num = 1 + 1 
        # print(test)
    # print('hi')
    # temp = model.predict("안녕")
    # model.predict("안돼")  
    test = 1
    return f"요약 : {test}"
    # return {"members" : ["1","2","3",f"{test}"]}
    #return "ssssssssssssssssssssssssssss"\

@app.route('/nlp', methods =['POST','GET'])
def runnlp() :
    print("runnlp실행")
    result = request.data
    result = json.loads(result.decode('utf-8'))['detail']
    result = sentiment_predict(result)
    print(result)
    return result

@app.route('/startyolo',methods = ['POST','GET'])
def CR() :
    # ocr값을 result에 저장
    result = runocr()
    print(result)
    # result 내용 db저장 나중에 바꿀것!!!!!
    db_class = Database()
    insertvalue =[]
    for i in result : 
        if result[f'{i}'] != None:
            insertvalue.append(result[f'{i}'])
            print("여기봐" + str(result[f'{i}']))
        else :
            insertvalue.append(0)
    sql = "INSERT INTO kt(crl,hc,fl) VALUES(%f,%f,%f)"%(insertvalue[0],insertvalue[1],insertvalue[2])
    db_class.execute(sql)
    db_class.commit()
    return f"{result['crl']}"

@app.route('/realyolo',methods = ['POST','GET'])
def yolo():
    print("realyolo시대가 왔다")
    # 파일스토리지 PIL형식으로 변환
    img1 = Image.open(request.files['files']).convert('RGB')
    # PIL형식 이미지 로컬에 jpg형식으로 저장
    img1.save('./image/saveImg.jpg','jpeg')

    # yolo 실행
    result = run(source='./image/saveImg.jpg')
    #np.array형식 파일 PIL형식으로 변환
    result = Image.fromarray(result)
    #bounding파일 저장
    result.save('./image/boundingBox.jpg','jpeg')
    #ocr 실행 경로는 ocrstart.py에 있음
    result = runocr()
    print(result)

    return result

if __name__ == "__main__" :
    app.run(debug=True)