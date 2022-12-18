import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
// import { BsJustify } from "react-icons/bs";
// import { BsPersonSquare } from "react-icons/bs";

export const SidebarData = [
  {
    title: "Task",
    path: "/VatTu",
    // icon: <BsJustify />,
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Group",
    path: "/User",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Someday",
    path: "/VatTu",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "User",
    path: "/User",
    icon: <IoIcons.IoMdPeople />,
    // icon: <BsPersonSquare />,
    cName: "nav-text",
  },
  {
    title: "Anytime",
    // path: "/VatTu",
    path: "/Avatar",
    icon: <AiIcons.AiFillDollarCircle />,
    cName: "nav-text",
  },
  {
    title: "Đăng Xuất",
    path: "/",
    icon: <IoIcons.IoMdArrowBack />,
    cName: "nav-text",
  },
];
