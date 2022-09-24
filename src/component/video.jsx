import React, { Component } from "react";
import Snowy from "./video/yellowgreen.mp4";

class Video extends Component {
  render() {
    return (
      <div className="video-bg">
        <video className="video" autoPlay loop muted>
          <source src={Snowy} type="video/mp4"></source>
        </video>
      </div>
    );
  }
}

export default Video;
