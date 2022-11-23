// import { useState } from "react";
// import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Username from "./username/index";
import Email from "./email/index";
import Avatar from "./avatar/index";
import NavLinks from "./NavLink";
import Group from "./group/group";
const User = () => {
  // const [text, setText] = useState();
  // const Filter_Text = async () => {
  //   try {
  //     const res = await axios.get("https://backendtodo123.herokuapp.com/text");
  //     setText(res.data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  // Filter_Text();

  return (
    <div className="user_container">
      <h2 className="user_title">User</h2>
      <div>
        <NavLinks />
        <Routes>
          <Route path="/Username" element={<Username />} />
          <Route path="/Email" element={<Email />} />
          <Route path="/avatar" element={<Avatar />} />
          <Route path="/group" element={<Group />} />
        </Routes>
      </div>
    </div>
  );
};

export default User;
