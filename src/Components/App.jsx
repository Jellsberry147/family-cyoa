import React from "react";
import { Route, Routes } from "react-router-dom";
import { Menu } from "./Menu";
import { Home } from "./Home";

function App() {
  return (
    <div className="App">
      <div className="display">
        <Routes>
          <Route path="/family-cyoa/" element={<Home />} />
          <Route path="/family-cyoa/Menu" element={<Menu />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
