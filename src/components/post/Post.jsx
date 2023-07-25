import React, { useState } from "react";
import "./post.css";
import {  MoreVert  } from "@mui/icons-material";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import {Users} from  '../../dummyData.js'
import { blue } from "@mui/material/colors";

// const data = Users.filter(u=> u.id === 5)
// console.log(data[0].username)

const Post = ({post}) => {
  console.log(post)
   
  const [like, setLike] =useState(post.like)
  const [isLiked, setIsLiked] =useState(false)
  const [likeColor, setIsLikeColour] = useState('')
  const [favColor, setIsFavColour] = useState('')
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  const LikeHandle = () =>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
    setIsLikeColour(isLiked ? 'blue': '')
    setIsFavColour(isLiked ? 'red': '')
    // setIsLikeColour(`isLiked ? ${background: blue;} : '' `)
  }


  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={PF+Users.filter((u) => u.id === post?.userId)[0].profilePicture}  alt="" className="postTopImg" />
            <span className="postUserName">{Users.filter((u) => u.id === post?.userId)[0].username}</span>
            <span className="postTime">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postTitle">{post?.desc}</span>
          <img src={PF+post.photo} alt="" className="postCenterImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <ThumbUpOutlinedIcon style={{color: likeColor }} onClick={LikeHandle} htmlColor="blue" className="likeIcon"  />
            <FavoriteBorderOutlinedIcon style={{color: favColor }} onClick={LikeHandle}  className="likeIcon" />
            <span className="postLikeCount">{like} people Like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postComment">{post.comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
