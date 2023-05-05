# Imports
import pandas as pd
from joblib import dump
from sklearn.pipeline import Pipeline
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import MinMaxScaler

# Laden der Daten aus der CSV-Datei
data = pd.read_csv('crop_recommendation.csv')

# Aufteilen der Daten in Features und Labels
X = data.drop('label', axis=1)
y = data['label']

# Teilen der Daten in Trainings- und Testdaten
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Erstellen eines DescisionTree-Classifiers
clf_pipeline = [('scaling', MinMaxScaler()), 
                ('clf', DecisionTreeClassifier())]

pipeline = Pipeline(clf_pipeline)

# Trainieren des Algorithmus auf den Trainingsdaten
pipeline.fit(X_train, y_train)

# Vorhersagen mit den Testdaten
y_pred = pipeline.predict(X_test)

# Auswertung der Leistung des Algorithmus
genauigkeit = accuracy_score(y_test, y_pred)

print(genauigkeit)

dump(pipeline, './crop_rec_v1.joblib')
