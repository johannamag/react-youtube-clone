import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/120px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt="Logo"
        />
      </div>
      <div className="header__input">
        <input type="text" placeholder="Search" />
        <SearchIcon className="header__inputBtn" />
      </div>
      <div className="header__right">
        <VideoCallIcon className="header__rightIcon" />
        <AppsIcon className="header__rightIcon" />
        <NotificationsActiveIcon className="header__rightIcon" />
        <Avatar
          src="https://i.insider.com/553e63c6ecad04144fe9d417?width=1136&format=jpeg"
          alt="profile"
        />
      </div>
    </div>
  );
}

export default Header;
