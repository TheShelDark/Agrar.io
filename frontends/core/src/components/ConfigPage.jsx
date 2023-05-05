import React, { useContext, useState } from 'react'
import { MicroServiceContext } from '../MicroServiceContext'
import { ListGroup } from "flowbite-react"
import { ServiceOptions } from '../MicroServiceContext'
import ServiceComp from './ServiceComp'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from "flowbite-react"

function ConfigPage() {
    let navigate = useNavigate()
    const {services, setServices} = useContext(MicroServiceContext)
    const [service_list, setServiceList] = useState(ServiceOptions)

    function startApp() {
        navigate("/home")
    }

  return (
    <div className='min-w-screen min-h-screen flex flex-row justify-center mt-12'>
        <div className='flex flex-col'>
            <h1 className='text-2xl font-bold'>Agrar.io Konfigurator</h1>

            <div className="flex items-center gap-2">
                <div className='flex flex-col mt-12'>
                    {service_list.map((option) => (
                        <ServiceComp name={option.name} route={option.route} component={option.component} />
                    ))

                    }
                </div>
            </div>

            <p className='text-lg font-bold mt-12'>Ausgewählte Services:</p>
            <div className='flex flex-col'>
                {services.map((service) => (
                    <p>{service.name}</p>
                ))}
            </div>
        
            <Button onClick={startApp}>
                Starten
            </Button> 
        </div>
        
    </div>
  )
}

export default ConfigPage