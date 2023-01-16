import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import "./Rightbar.css";
const Rightbar = () => {
  return (
    <div className="main-home-rightbar">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Rightbar;
