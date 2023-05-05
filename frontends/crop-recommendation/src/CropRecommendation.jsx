import React from 'react'
import { Label, TextInput, Button, Card } from 'flowbite-react'
import { useState } from 'react'

function CropRecommendation() {
    const [nValue, setNValue] = useState(0);
    const [pValue, setPValue] = useState(0);
    const [kValue, setKValue] = useState(0);
    const [phValue, setPhValue] = useState(0);
    const [rainValue, setRainValue] = useState(0);
    const [humidityValue, setHumidityValue] = useState(0);
    const [tempValue, setTempValue] = useState(0);

    const [prediction, setPrediction] = useState(null);
    const [loading, setLoading] = useState();
    const [error, setError] = useState(null);

    const dataSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        let data_to_predict = [nValue, pValue, kValue, tempValue, humidityValue, phValue, rainValue]
        let request_data = {
            "data": data_to_predict
        }

        console.log(request_data)

        try {
            const response = await fetch(
              `http://127.0.0.1:8000/predict`, {
                method: "POST",
                body: JSON.stringify(request_data)
              }
            );
            if (!response.ok) {
              throw new Error(
                `This is an HTTP error: The status is ${response.status}`
              );
            }
            let actualData = await response.json();
            console.log(actualData)
            setPrediction(actualData.prediction);
            setError(null);
          } catch(err) {
            setError(err.message);
            setPrediction(null);
          } finally {
            setLoading(false);
          }  
    
    }


    

  return (
    <div className='mt-12'>
        <form onSubmit={dataSubmit}>
            <h1 className='text-2xl font-bold'>Deine Bodendaten</h1>
            <div className='flex flex-row gap-4 mt-4'>

                <div className='flex flex-col'>
                    <div className="mb-2 block">
                        <Label
                        htmlFor="n-value"
                        value="N-Wert"
                        />
                    </div>
                    <TextInput
                        id="n-value"
                        type="number"
                        placeholder="33"
                        required={true}
                        onChange={(e) => setNValue(e.target.value)}
                    />
                </div>
                
                <div className='flex flex-col'>
                    <div className="mb-2 block">
                        <Label
                        htmlFor="p-value"
                        value="P-Wert"
                        />
                    </div>
                    <TextInput
                        id="p-value"
                        type="number"
                        placeholder="56"
                        required={true}
                        onChange={(e) => setPValue(e.target.value)}
                    />
                </div>

                <div className='flex flex-col'>
                    <div className="mb-2 block">
                        <Label
                        htmlFor="k-value"
                        value="K-Wert"
                        />
                    </div>
                    <TextInput
                        id="k-value"
                        type="number"
                        placeholder="79"
                        required={true}
                        onChange={(e) => setKValue(e.target.value)}
                    />
                </div>

                <div className='flex flex-col'>
                    <div className="mb-2 block">
                        <Label
                        htmlFor="ph-value"
                        value="PH-Wert"
                        />
                    </div>
                    <TextInput
                        id="ph-value"
                        type="number"
                        placeholder="6.5"
                        required={true}
                        step="0.1"
                        onChange={(e) => setPhValue(e.target.value)}
                    />
                </div>

            </div>

            <div className='flex flex-row gap-4 mt-4'>

                <div className='flex flex-col'>
                    <div className="mb-2 block">
                        <Label
                        htmlFor="rainfall-value"
                        value="Durchschnittsniederschlag"
                        />
                    </div>
                    <TextInput
                        id="rainfall-value"
                        type="number"
                        placeholder="220.7"
                        required={true}
                        step="0.1"
                        onChange={(e) => setRainValue(e.target.value)}
                    />
                </div>

                <div className='flex flex-col'>
                    <div className="mb-2 block">
                        <Label
                        htmlFor="humidity-value"
                        value="Feuchtigkeit"
                        />
                    </div>
                    <TextInput
                        id="humidity-value"
                        type="number"
                        placeholder="81.3"
                        required={true}
                        step="0.1"
                        onChange={(e) => setHumidityValue(e.target.value)}
                    />
                </div>

                <div className='flex flex-col'>
                    <div className="mb-2 block">
                        <Label
                        htmlFor="temp-value"
                        value="Durchschnittstemperatur"
                        />
                    </div>
                    <TextInput
                        id="temp-value"
                        type="number"
                        placeholder="21"
                        required={true}
                        step="0.1"
                        onChange={(e) => setTempValue(e.target.value)}
                    />
                </div>

            </div>

            <div className='mt-6'>
                <Button color="success" type='submit'>
                    Empfehlung erhalten
                </Button>
            </div>

        </form>

        <div className='mt-16'>
            {prediction ?
                <Card href="#">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Unsere Empfehlung für dein Feld
                    </h5>
                    <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
                    Entsprechend deinen Bodenwerten ergab unsere Analyse, dass du am besten <span className='text-lg font-bold underline'>{prediction}</span> anbauen solltest.
                    </p>
                </Card>
            :
                <></>
            }

            {loading ?
                <p>Loading...</p>
            :
                <></>
            }

            {error ?
                <p>Error: {error}</p>
            :
                <></>
            }
        </div>
    </div>
  )
}

export default CropRecommendation