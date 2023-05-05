import React from "react";
import ReactDOM from "react-dom";
import CropRecommendation from "./CropRecommendation";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: crop-recommendation</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
    <CropRecommendation />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
