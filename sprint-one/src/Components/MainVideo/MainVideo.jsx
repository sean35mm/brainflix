import React, { Component } from 'react';
import VideoDetails from '../../Data/video-details.json';

class MainVideo extends React.Component {

state = {vid = VideoDetails}

  render() {
    return (
      <>
        <video></video>
      </>
    )
  }
}

export default MainVideo;
