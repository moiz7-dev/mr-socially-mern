import { Card } from "@mui/material";
import React from "react";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <Card>
      <div className='sidebar-container'>
        <div className='profile-wrapper'>
          <img
            src='https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png'
            alt='avatar'
          />
          <p>Moiz Ratlamwala</p>
          <p className='about'>about user</p>
        </div>
        <div className='info-wrapper'>
          <div className='friends-wrapper'>
            <p>Friends</p>
            <p>99</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Sidebar;
