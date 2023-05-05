import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import WaterConsumptionDashboard from "./WaterConsumptionDashboard";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: water-consumption</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>

    <div className="mt-16">
      <WaterConsumptionDashboard />
    </div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
