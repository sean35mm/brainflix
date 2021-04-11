import React from 'react';
import './MainVideo.scss';

const MainVideo = ({mainVideo}) => {
    return (
      <div className="video">
        <div className="video__container">
          <video className="video__hero" controls poster={mainVideo.image}></video>
        </div>
      </div>
    )
  }
  


export default MainVideo;
