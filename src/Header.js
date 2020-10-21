import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  const [input, setInput] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/120px-Logo_of_YouTube_%282015-2017%29.svg.png"
            alt="Logo"
          />
        </Link>
      </div>
      <div className="header__input">
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="Search"
        />
        <Link to={`/search/${input}`}>
          <SearchIcon className="header__inputBtn" />
        </Link>
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
