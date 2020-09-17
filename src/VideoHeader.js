import React from "react";
import "./VideoHeader.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CameraAltIcon from "@material-ui/icons/CameraAlt";

const VideoHeader = () => {
  return (
    <div className="videoHeader">
      <ArrowBackIcon />
      <h3>Vidify</h3>
      <CameraAltIcon />
    </div>
  );
};

export default VideoHeader;
