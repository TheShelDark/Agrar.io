import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CropRecommendation from "croprecommendation/CropRecommendation"
import WaterConsumptionDashboard from "dashboard/WaterConsumptionDashboard"
import { MicroServiceContext } from "./MicroServiceContext";
import "./index.scss";
import DashboardLayout from "./components/DashboardLayout";
import ConfigPage from "./components/ConfigPage";
import HomePage from "./components/HomePage";
import AccountManagement from "./components/AccountManagement";



function App () {
  const [services, setServices] = useState([]);
  return(
    <BrowserRouter>
    <MicroServiceContext.Provider value={{services, setServices}}>
          <Routes>
            
              <Route path="/" element={<ConfigPage />} />
              <Route element={<DashboardLayout />} >
                <Route path="/home" element={<HomePage />} />
                <Route path="/acm" element={<AccountManagement />} />
                <Route path="/recommendation" element={<CropRecommendation />} />
                <Route path="/waterconsumption" element={<WaterConsumptionDashboard />} />
              </Route>
            
          </Routes>
          </MicroServiceContext.Provider>
    </BrowserRouter>
  )
  
  
}
ReactDOM.render(<App />, document.getElementById("app"));
//<CropRecommendation />
/*
<div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: core</div>
    <WaterConsumptionDashboard />
    
  </div>
  */