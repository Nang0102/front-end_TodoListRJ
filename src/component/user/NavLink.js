import { NavLink } from "react-router-dom";
import "./user.css";
const NavLinks = () => {
  return (
    <div>
      <ul className="menu">
        <NavLink className="menu-name" to="/Username">
          Username
        </NavLink>

        <NavLink className="menu-name" to="/Email">
          Email
        </NavLink>

        <NavLink className="menu-name" to="/avatar">
          Avatar
        </NavLink>

        <NavLink className="menu-name" to="/group">
          Group
        </NavLink>
      </ul>
    </div>
  );
};

export default NavLinks;
