from pickle import FALSE, TRUE
from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm, OAuth2PasswordBearer
from pydantic import BaseModel, Field
from jose import jwt
from enum import Enum
from typing import Optional
import json
from fastapi.middleware.cors import CORSMiddleware
import pydantic
import json
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
import time
import model

from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse


from typing import List

from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.responses import HTMLResponse

from pathlib import Path

def readJson(name):
    f = open(name, 'r')
    data = json.load(f)
    return data

def writetoJsonArray(name, array, data):
    with open(name,'r+') as file:
        file_data = json.load(file)
        file_data.append(data)
        file.seek(0)
        json.dump(file_data, file, indent = 4)


from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8000",
    "http://localhost:4200",
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post('/addProduct')
async def AddNewProduct(data: model.ProductModel):
    
    data = jsonable_encoder(data)

    products = readJson("data.json")

    var = FALSE

    for i in products:
        if i['productName'] == data['productName']:
            var = TRUE
            break
        else:
            var = FALSE
    
    if var == FALSE:
        writetoJsonArray("data.json", "products", data)
        return json.dumps('Product was been added successfully')
    else:
        return json.dumps('product already exists')

@app.get('/getAllProducts')
async def getAllProducts():
    products = readJson("data.json")

    return products

@app.get('/getIndex')
async def getIndex():
    products = readJson("data.json")
    indexList = []
    for i in products:
        indexList.append(i["index"])
    print(indexList)
    indexFree = 0
    while True:
        if indexFree not in indexList:
            return indexFree
        else:
            indexFree = indexFree + 1

app.mount("/", StaticFiles(directory="./client/dist", html=True), name="static")

@app.get("/")
async def get():
    html_path = Path("./client/dist/index.html")
    content = html_path.read_text()
    return HTMLResponse(content=content, status_code=200)