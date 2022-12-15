import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DangNhap from "./component/login/DangNhap";
// import DangNhap from "./login/DangNhap";
import DangKy from "./component/login/Dangky";
import DangKyChu from "./component/login/DangKyChu";

import Home from "./component/home/homeindex";

import "bootstrap/dist/css/bootstrap.min.css";
// import VatTu from "./component/ChiNhanh/VatTu/VatTu";
// import VatTu from "./features/ChiNhanh/VatTu/VatTu";

// import BanHang from "./features/ChiNhanh/BANHANG/navbargiohang";
// import User from "./features/ChiNhanh/User/User";
import Username from "./component/ChiNhanh/User/username";
import TRANG1 from "./component/ChiNhanh/VatTu/TRANG1";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/DangNhap" element={<DangNhap></DangNhap>}></Route>
        <Route path="/DangKy" element={<DangKy></DangKy>}></Route>
        {/* <Route
          path="/ChiNhanh"
          element={
            <Home>
              <ChiNhanh></ChiNhanh>
            </Home>
          }
        ></Route> */}
        <Route
          path="/VatTu"
          element={
            <Home>
              {/* <VatTu></VatTu> */}
              <TRANG1 />
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

        {/* <Route
          path="/Trangluongnhanvien"
          element={
            <Home>
              <Trangluongnhanvien />
            </Home>
          }
        ></Route> */}

        <Route path="/DangKyChu" element={<DangKyChu />}></Route>

        {/* <Route
          path="/BanHang"
          element={
            <Home>
              <BanHang />
            </Home>
          }
        ></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
