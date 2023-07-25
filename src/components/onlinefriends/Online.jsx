import React from "react";
import './online.css'

const Online = ({user}) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  return (
    <li className="onlineFriend">
      <div className="onlineProfileImgContainer">
        <img src={PF+user.profilePicture} alt="" className="onlineFriendImg" />
        <span className="onlineFriendStatus"></span>
      </div>
      <h4 className="onlineFriendName">{user.username}</h4>
    </li>
  );
};

export default Online;
