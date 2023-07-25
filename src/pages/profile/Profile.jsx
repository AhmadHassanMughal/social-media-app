import React from "react";
import TopBar from "../../components/topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import "./profile.css";
const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  return (
    <>
      <TopBar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src= {`${PF}person/7.jpg`}
                alt=""
                className="profileCoverImg"
              />
              <img
                src={`${PF}person/images (1).jpg`}
                alt=""
                className="profileCoverUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Dev bro</h4>
              <span className="profileInfoDesc">My life my rules</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
