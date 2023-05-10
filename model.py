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


from typing import List

from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.responses import HTMLResponse


class ProductModel(BaseModel):
    index: int
    businessReason: str
    productName: str
    publisher: str
    version: str
    edition: str
    releaseDate: str
    standard: bool
    costs: int
    price: int
    timeperiod: str
    logo: str
    requirements: list  #
    location: str
    linkToWebsite: str
    externalID: int
    prereqireties: list #
    functionality: str
    departement: list #
    role: list #
    category: str
    tags: list
    name: str
    descripton: str
    technicalOwner: str
    businessOwner: str
    contractOwner: str
    OLA: str
    appClassification: str
    lifecycleState: str
    SWOApproved: str
    approvalType: str
    internalID: int
    licenseModel: str
    licenseLevel: str
