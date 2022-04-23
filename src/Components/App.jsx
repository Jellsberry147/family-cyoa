import React from "react";
import { Route, Routes } from "react-router-dom";
import { Menu } from "./Menu";
import { Page1 } from "./Page1";
import { Page13 } from "./Page13";

function App() {
  return (
    <div className="App">
      <div className="display">
        <Routes>
          {/*Don't forget to add the "family-cyoa" path to the front of these links.*/}
          <Route path="/family-cyoa/" element={<Page1 />} />

          <Route path="/Page13/" element={<Page13 />} />
          <Route path="/family-cyoa/Menu" element={<Menu />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
