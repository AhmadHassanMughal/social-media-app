import React from "react";
import "./rightbar.css";
import Online from "../onlinefriends/Online";
import { Users } from "../../dummyData.js";
import Home from "../../pages/home";

const Rightbar = ({ profile }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src={`${PF}person/gift.png`} alt="" className="giftImg" />
          <div className="birthdayGiftTitle">
            <b>Dev bro</b> and<b> 3 other friends </b> have a birthday
          </div>
        </div>

        <img
          src={`${PF}person/stories(1).jpg`}
          alt=""
          className="rightbarAdImg"
        />

        <h3 className="onlineSectionTitle">Online Friends</h3>
        <ul className="onlineFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h3 className="userInfoTitle">User Information</h3>
        <div className="rightbarInfo">
          <div className="rightInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfovalue">Lahore</span>
          </div>
          <div className="rightInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfovalue">Karachi</span>
          </div>
          <div className="rightInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfovalue">Single</span>
          </div>
        </div>
        <h3 className="userInfoTitle">User Friends</h3>
        <div className="rightBarFollowings">
          <div className="rightBarFollowing">
            <img src={`${PF}person/1.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Doe</span>
          </div>
          <div className="rightBarFollowing">
            <img src={`${PF}person/7.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Jane Doe</span>
          </div>
          <div className="rightBarFollowing">
            <img src={`${PF}person/1.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Carter Doe</span>
          </div>
          <div className="rightBarFollowing">
            <img src={`${PF}person/1.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">People Doe</span>
          </div>
          <div className="rightBarFollowing">
            <img src={`${PF}person/1.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Person Doe</span>
          </div>
          <div className="rightBarFollowing">
            <img src={`${PF}person/1.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Doe</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar/> : <HomeRightBar/>}
      </div>
    </div>
  );
};

export default Rightbar;
