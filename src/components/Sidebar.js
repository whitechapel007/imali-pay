import React from "react";
import "./sidebar.css";
import logo from "../assets/logo.svg";
import team from "../assets/team_dashboard.svg";
import customer from "../assets/account_circle.svg";
import defaults from "../assets/wallet.svg";
import fulfil from "../assets/sell.svg";
import { NavLink, useLocation } from "react-router-dom";
const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="main-sidebar-container">
      <div>
        <ul className="ul-container">
          <img src={logo} alt="" className="logo" />
          <h4 className="quick-menu">QUICK MENU</h4>
          {location.pathname === "/reconcillation" ? (
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "li-container" : "li-active"
              }
            >
              <img src={team} alt="" />
              Overview
            </NavLink>
          ) : (
            <>
              {" "}
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "li-container" : "li-active"
                }
              >
                <img src={team} alt="" />
                Overview
              </NavLink>
              <NavLink
                to={"/customers"}
                className={({ isActive }) =>
                  isActive ? "li-container" : "li-active"
                }
              >
                <img src={customer} alt="" />
                Customers
              </NavLink>
              <NavLink
                to={"/defaults"}
                className={({ isActive }) =>
                  isActive ? "li-container" : "li-active"
                }
              >
                <img src={defaults} alt="" />
                Defaults
              </NavLink>
              <NavLink
                to={"/fulfilment"}
                className={({ isActive }) =>
                  isActive ? "li-container" : "li-active"
                }
              >
                <img src={fulfil} alt="" />
                Fulfilment
              </NavLink>
            </>
          )}{" "}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
