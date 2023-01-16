import React from "react";
import "./navbar.css";
import notification from "../assets/notification.svg";
import avatar from "../assets/avatar.svg";
import arrow from "../assets/Rectangle.svg";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-main-info">
        <div>
          <h1 className="main-heading">Hello, Alex</h1>
          <p className="main-paragraph">
            Here’s what’s going on with your account.
          </p>
        </div>
        <img src={notification} alt="" />
      </div>
      <div className="navbar-avatar-info">
        <div className="v_line"></div>

        <div className="navbar-avatar-box">
          <img src={avatar} alt="" />
          <div>
            <div className="navbar-avatar-name">
              <h3>Alex</h3>
              <img src={arrow} alt="" />
            </div>

            <div className="vendor">Vendor ID: 3945823</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
