import { Bookmark, CalendarMonth, CastForEducation, Chat, Feed, Person2, QuestionMark, RssFeed, School, Wifi, WorkOutline, YouTube } from '@mui/icons-material'
import "./sidebar.css"
import React from 'react'
import {Users} from  '../../dummyData.js'


const Sidebar = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  return (
    <div className="sidebar">
        <ul className="sidebarList">
            <li className="sidebarListItem">
                <RssFeed />
                <span className="sidebarItemName">Feed</span>
            </li>
            <li className="sidebarListItem">
                <Chat />
                <span className="sidebarItemName">Chats</span>
            </li>
            <li className="sidebarListItem">
                <YouTube />
                <span className="sidebarItemName">Videos</span>
            </li>
            <li className="sidebarListItem">
                <Person2 />
                <span className="sidebarItemName">Groups</span>
            </li>
            <li className="sidebarListItem">
                <Bookmark />
                <span className="sidebarItemName">Bookmarks</span>
            </li>
            <li className="sidebarListItem">
                <QuestionMark />
                <span className="sidebarItemName">Questions</span>
            </li>
            <li className="sidebarListItem">
                <CalendarMonth />
                <span className="sidebarItemName">Events</span>
            </li>
            <li className="sidebarListItem">
                <School />
                <span className="sidebarItemName">Courses</span>
            </li>
            <li className="sidebarListItem">
                <WorkOutline />
                <span className="sidebarItemName">Jobs</span>
            </li>
        </ul>

        <div className="sidebarButton">
            Show More
        </div>
        <hr className='sidebarHr' />
        <ul className="sidebarFriedList">
            {Users.map((u) => (
            <li className="sidebarFriend">
                <img key={u.id} src={PF+u.profilePicture} className='sidebarImg' alt="loading" />
                <span className="sidebarFriendNa">{u.username}</span>
            </li>
            ))}
           
        </ul>
    </div>
  )
}

export default Sidebar