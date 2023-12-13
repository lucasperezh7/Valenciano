import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root from "./Root";
import Fervia from "../src/Fervia";
import Vadebo from "../src/Vadebo";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/Fervia" element={<Fervia />} />
        <Route path="/Vadebo" element={<Vadebo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
