import { Chat, Notifications, Person, Search } from "@mui/icons-material";
import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const TopBar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [dialog, setDialog] = useState()
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
            <Person onClick={handleOpen}/>
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

      <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} >
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
    </>
  );
};

export default TopBar;
