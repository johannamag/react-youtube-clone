import React from "react";
import "./Channel.css";
import { Avatar } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

function Channel({ image, channel, verified, subs, numbVideos, description }) {
  return (
    <div className="channel">
      <Avatar className="channel__logo" src={image} alt={channel} />
      <div className="channel__text">
        <h4>
          {channel} {verified && <CheckCircleIcon />}
        </h4>
        <p>
          {subs} subscribers · {numbVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Channel;
