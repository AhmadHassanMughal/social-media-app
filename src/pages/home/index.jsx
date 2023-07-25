import React from "react";
import TopBar from "../../components/topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import "./style.css"
const Home = () => {
  return ( 
  <>
  <TopBar />
  <div className="homeContianer">
    <Sidebar />
    <Feed />
    <Rightbar />
  </div>
  </>
)};

export default Home;
