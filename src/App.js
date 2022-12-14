import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DangNhap from "./component/login/DangNhap";
import DangKy from "./component/login/Dangky";
import DangKyChu from "./component/login/DangKyChu";

import Home from "./component/home/homeindex";

import "bootstrap/dist/css/bootstrap.min.css";
import VatTu from "./component/ChiNhanh/VatTu/VatTu";
import Username from "./component/ChiNhanh/User/username";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/DangNhap" element={<DangNhap/>}></Route>
          <Route path="/DangKy" element={<DangKy/>}></Route>

          <Route
            path="/VatTu"
            element={
              <Home>
                <VatTu/>
              </Home>
            }
          ></Route>

          <Route
            path="/User"
            element={
              <Home>
                <Username />
              </Home>
            }
          ></Route>

          <Route path="/DangKyChu" element={<DangKyChu />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
