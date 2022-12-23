import React from "react";
import { Routes, Route } from "react-router-dom";
import DangNhap from "./component/login/DangNhap";
import DangKy from "./component/login/Dangky";
import DangKyChu from "./component/login/DangKyChu";

import Home from "./component/home/homeindex";

import "bootstrap/dist/css/bootstrap.min.css";
import Tasks from "./component/ChiNhanh/Task/Tasks";
import Username from "./component/ChiNhanh/User/username";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DangNhap></DangNhap>}></Route>
      <Route path="/DangKy" element={<DangKy></DangKy>}></Route>

      <Route
        path="/Task"
        element={
          <Home>
            <Tasks></Tasks>
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
  );
}

export default App;
