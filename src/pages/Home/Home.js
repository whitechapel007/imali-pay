import React from "react";
import Rightbar from "../../components/RightBar/Rightbar";
import Sidebar from "../../components/Sidebar";
import "./home.css";

const Home = () => {
  return (
    <div className="main-home-container">
      <Sidebar />
      <Rightbar />
    </div>
  );
};

export default Home;
