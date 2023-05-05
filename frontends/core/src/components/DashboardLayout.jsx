import React, { useContext } from 'react'
import {Sidebar} from "flowbite-react"
import { HiChartPie, HiViewBoards, HiInbox, HiUser, HiShoppingBag, HiArrowSmRight, HiTable } from 'react-icons/hi';
import { GiFallingLeaf } from 'react-icons/gi'
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { MicroServiceContext } from '../MicroServiceContext';


function DashboardLayout() {
    const {services, setServices} = useContext(MicroServiceContext)
    let navigate = useNavigate();

    function reset() {
        setServices([])
        navigate("/")
    }
    
  return (
    <div className='flex flex-row'>
        <div className="w-fit">
            <Sidebar aria-label="Sidebar with content separator example">
                <div className='flex flex-row justify-center items-center mt-4'>
                    <GiFallingLeaf size={32}/>
                    <h1 className='text-2xl font-bold text-center ml-2'>Agrar.io</h1>
                </div>
                <Sidebar.Items color='success'>
                <Sidebar.ItemGroup>
                    <Sidebar.Item
                    as={Link}
                    to="/home"
                    icon={HiChartPie}
                    >
                    Home
                    </Sidebar.Item>
                    <Sidebar.Item
                    as={Link}
                    to="/acm"
                    icon={HiUser}
                    >
                    Account Management
                    </Sidebar.Item>
                    {
                        services.map((service) => (
                            <Sidebar.Item
                            as={Link}
                            to={service.route}
                            >
                            {service.name}
                            </Sidebar.Item>
                        ))
                    }
                    
                </Sidebar.ItemGroup>
                <Sidebar.ItemGroup>
                    <Sidebar.Item
                    onClick={reset}
                    icon={HiArrowSmRight}
                    >
                    Abmelden
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>
        <div className='mt-24 ml-24'>
            <Outlet />
        </div>
        
    </div>
  )
}

export default DashboardLayout