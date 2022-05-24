import React from "react";
import { Route, Routes } from "react-router-dom";
import { Menu } from "./Menu";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Page3 } from "./Page3";
import { Page4 } from "./Page4";
import { Page5 } from "./Page5";
import { Page6 } from "./Page6";
import { Page7 } from "./Page7";
import { Page8 } from "./Page8";
import { Page9 } from "./Page9";
import { Page10 } from "./Page10";
import { Page11 } from "./Page11";
import { Page12 } from "./Page12";
import { Page13 } from "./Page13";
import { Page14 } from "./Page14";
import { Page15 } from "./Page15";
import { Page16 } from "./Page16";
import { Page17 } from "./Page17";
import { Page18 } from "./Page18";
import { Page19 } from "./Page19";
import { Page20 } from "./Page20";

function App() {
  return (
    <div className="App">
      <div className="display">
        <Routes>
          {/*Don't forget to add the "family-cyoa" path to the front of these links.*/}
          <Route path="/family-cyoa/page1" element={<Page1 />} />
          <Route path="/family-cyoa/page2" element={<Page2 />} />
          <Route path="/family-cyoa/page3" element={<Page3 />} />
          <Route path="/family-cyoa/page4" element={<Page4 />} />
          <Route path="/family-cyoa/page5" element={<Page5 />} />
          <Route path="/family-cyoa/page6" element={<Page6 />} />
          <Route path="/family-cyoa/page7" element={<Page7 />} />
          <Route path="/family-cyoa/page8" element={<Page8 />} />
          <Route path="/family-cyoa/page9" element={<Page9 />} />
          <Route path="/family-cyoa/page10" element={<Page10 />} />
          <Route path="/family-cyoa/page11" element={<Page11 />} />
          <Route path="/family-cyoa/page12" element={<Page12 />} />
          <Route path="/family-cyoa/page13" element={<Page13 />} />
          <Route path="/family-cyoa/page14" element={<Page14 />} />
          <Route path="/family-cyoa/page15" element={<Page15 />} />
          <Route path="/family-cyoa/page16" element={<Page16 />} />
          <Route path="/family-cyoa/page17" element={<Page17 />} />
          <Route path="/family-cyoa/page18" element={<Page18 />} />
          <Route path="/family-cyoa/page19" element={<Page19 />} />
          <Route path="/family-cyoa/page20" element={<Page20 />} />
          <Route path="/family-cyoa/Menu" element={<Menu />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
