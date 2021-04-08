import React from 'react';
import './MainVideo.scss';

const MainVideo = ({CurrentVideo}) => {
    return (
      <div className="video">
        <div className="video__container">
          <video className="video__hero" controls poster={CurrentVideo.image}></video>
        </div>
      </div>
    )
  }
  


export default MainVideo
