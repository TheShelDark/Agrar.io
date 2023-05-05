import { createContext } from "react";
import CropRecommendation from "croprecommendation/CropRecommendation"
import WaterConsumptionDashboard from "dashboard/WaterConsumptionDashboard"

export const MicroServiceContext = createContext(null);
export const ServiceOptions = [
    {
        "name": "Crop Recommendation",
        "route": "/recommendation",
        "component": <CropRecommendation />
    },
    {
        "name": "Water Consumption",
        "route": "/waterconsumption",
        "component": <WaterConsumptionDashboard />
    },
]