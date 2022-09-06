import React from "react";
import "./App.style.scss";
import { MapView } from "./MapView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddPlace } from "./MapView/components/pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MapView />} />
        <Route path="/addPlace" element={<AddPlace />} />

        {/* Route default */}
        <Route path="*" element={<MapView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
