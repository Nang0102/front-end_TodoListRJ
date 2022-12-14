import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";

import { Link } from "react-router-dom";

const header = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [sidebar, setSidebar] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const showSidebar = () => setSidebar(!sidebar);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [show, setshow] = useState(true);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [cart, setCart] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [ViewPost, SetPostShow] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [ViewPosttt, SetPostShowww] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isToggledd, setisToggledd] = useState(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [Data, setData] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [Data1, setData1] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [RowData, SetRowData] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [DK, SetDK] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [id, setId] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [idd, setIdd] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [cn, setcn] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const handlePostShow = () => {
    SetPostShow(true);
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const handleShow = () => {
    SetDK(false);
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const handleShowT = () => {
    SetDK(true);
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const handlePostShowww = () => {
    SetPostShowww(true);
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const hanldePostClose = () => {
    SetPostShow(false);
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const phanquyen = localStorage.getItem("Vaitro");
  const Dieukien = localStorage.getItem("DieuKien");
  console.log("phanquya", phanquyen);
  var b = JSON.stringify(phanquyen);
  var k = "QuanLy";
  var Xep = false;
  var kho = false;

  if (phanquyen === "Chu") {
    Xep = true;
  }
  if (phanquyen === "QuanLyKho") {
    kho = true;
  }
  const Rerun = () => {
    if (Dieukien == "true") {
      SetDK(true);
    }
  };
  //   DK=false;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    showSidebar();
  }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  return (
    <>
      <div className="navbarngang"></div>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div style={{ borderLeft: "1px solid gray" }} className="navbar">
          <Link to="#" className="menu-bars"></Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul>
            <li className="navbar-toggle"></li>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <div>
                      {item.icon}
                      <span>{item.title}</span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default header;
