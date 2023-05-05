from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import pandas as pd

# Laden der Daten aus einer CSV-Datei
data = pd.read_csv('bodendaten.csv')

# Aufteilen der Daten in Features und Labels
X = data.drop('Gemüse', axis=1)
y = data['Gemüse']

# Teilen der Daten in Trainings- und Testdaten
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Erstellen eines Entscheidungsbaum-Klassifikators
clf = DecisionTreeClassifier()

# Trainieren des Algorithmus auf den Trainingsdaten
clf.fit(X_train, y_train)

# Vorhersagen mit den Testdaten
y_pred = clf.predict(X_test)

# Auswertung der Leistung des Algorithmus
print("Genauigkeit:", accuracy_score(y_test, y_pred))