import React, { useEffect, useState } from "react";

import Username from "./username";
import Email from "./email";
// import Group from "./group";
import Avatar from "./avatar";
const User = () => {
  const [show, setshow] = useState(false);
  const [show1, setshow1] = useState(false);
  // const [show2, setshow2] = useState(false);
  const [show3, setshow3] = useState(false);

  return (
    <div>
      <div style={{ marginLeft: "250px" }}>
        {/* <div style={{ marginLeft: "25%" }}> */}
        <h1>User</h1>
        <span
          style={{ color: "black", fontSize: "20px" }}
          onClick={() => {
            setshow(true);
            setshow1(false);
            setshow3(false);
          }}
        >
          Username
        </span>
        <span
          style={{ color: "black", marginLeft: "130px", fontSize: "20px" }}
          onClick={() => {
            setshow(false);
            setshow1(true);
            setshow3(false);
          }}
        >
          Email
        </span>
        {/* <span
          style={{ color: "black" }}
          onClick={() => {
            setshow(false);
            setshow1(false);
            setshow2(true);
            setshow3(false);
          }}
        >
          Group
        </span> */}
        <span
          style={{ color: "black", marginLeft: "130px", fontSize: "20px" }}
          onClick={() => {
            setshow(false);
            setshow1(false);
            setshow3(true);
          }}
        >
          Avatar
        </span>
      </div>
      <div style={{ borderBottom: "1px solid gray", marginTop: "20px" }}></div>

      <div style={{ marginLeft: "260px" }}>
        {show && <Username />}
        {show1 && <Email />}
        {/* {show2 && <Group />} */}
        {show3 && <Avatar />}
      </div>
    </div>
  );
};

export default User;
