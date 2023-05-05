from joblib import load
import models.ml.classifier as clf
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd

app = FastAPI()

origins = [
    "http://localhost:3000",
    "https://localhost:3000",
    "http://localhost:3001",
    "https://localhost:3001",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event('startup')
async def load_model():
    clf.model = load('models/ml/crop_rec_v1.joblib')

@app.post('/predict', tags=["predictions"])
async def get_prediction(request: Request):
    print(await request.json())
    data = [dict(await request.json())['data']]
    print(data)
    data_df = pd.DataFrame(data, columns=['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall'])
    print(data_df)
    prediction = clf.model.predict(data_df).tolist()
    log_proba = clf.model.predict_proba(data_df).tolist()
    return {"prediction": prediction,
            "log_proba": log_proba}
