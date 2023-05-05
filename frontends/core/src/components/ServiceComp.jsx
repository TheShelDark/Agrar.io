import React, { useContext, useState } from 'react'
import { MicroServiceContext } from '../MicroServiceContext'
import {Card} from "flowbite-react"

function ServiceComp(props) {
    const {services, setServices} = useContext(MicroServiceContext)
    const [service, setService] = useState({
        "name": props.name,
        "route": props.route,
        "component": props.component
    })

    function handleClick () {
            if (services.indexOf(service) > -1) {
                setServices(services.filter(ser => ser.name !== props.name))
            } else {
                setServices([...services, service])
            }
    
    }
  return (
    <div className='hover:bg-slate-300 hover:cursor-pointer'>
        <Card className="hover:bg-slate-300 hover:cursor-pointer" onClick={handleClick}>
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.name}
        </h5>
        </Card>
    </div>
    
  )
}

export default ServiceComp