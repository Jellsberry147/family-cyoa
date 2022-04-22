import React from "react";
import { Route, Routes } from "react-router-dom";
import { Menu } from "./Menu";
import { Home } from "./Home";

function App() {
  return (
    <div className="App">
      <div className="display">
        <Routes>
          <Route path="/CYOA/Home/" element={<Home />} />
          <Route path="/CYOA/Menu" element={<Menu />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
