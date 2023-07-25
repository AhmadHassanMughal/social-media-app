import { Chat, Notifications, Person, Search } from "@mui/icons-material";
import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const TopBar = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  return (
    <>
      <div className="topbarContainer">
        <div className="topbarLeft">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logo">
              IB <span style={{ color: "#DDF8F3" }}>Social</span>
            </span>
          </Link>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <Search className="searchIcon" />
            <input
              type="text"
              placeholder="Search for Videos, Friends"
              className="searchInput"
            />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Home</span>
            <span className="topbarLink">Titles</span>
          </div>
          <div className="topbarIcons"></div>
          <div className="topbarIconsItem">
            <Person />
            <span className="topbarBadge">3</span>
          </div>
          <div className="topbarIconsItem">
            <Chat />
            <span className="topbarBadge">8</span>
          </div>
          <div className="topbarIconsItem">
            <Notifications />
            <span className="topbarBadge">1</span>
          </div>
          <Link to="/profile/!username">
            <img src={`${PF}person/1.jpg`} alt="" className="topbarImg" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopBar;
