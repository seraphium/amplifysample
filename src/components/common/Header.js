import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ user, signOut }) => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/courses" activeStyle={activeStyle}>
        Courses
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
      <div style={{ float: "right" }}>
        <span>{user.username}</span>
        <button onClick={signOut}>Sign Out</button>
      </div>
    </nav>
  );
};

Header.propTypes = {
  user: PropTypes.object.isRequired,
  signOut: PropTypes.func.isRequired,
};
export default Header;
