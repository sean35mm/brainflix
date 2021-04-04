import React from 'react';
import ViewsIcon from "../../Assets/Icons/Icon-views.svg";
import LikesIcon from "../../Assets/Icons/Icon-likes.svg";
import './VideoInfo.scss';

const VideoInfo = ({CurrentVideo}) => {
  const newDate = new Date(CurrentVideo.timestamp);
  return (
    <div className="video-info" key={CurrentVideo.id}>
      <h1 className="video-info__title">{CurrentVideo.title}</h1>

      <div className="video-info__info">
        <div className="video-info__subtitle">
          <p className="video-info__subtitle-author">By {CurrentVideo.channel}</p>
          <p className="video-info__subtitle-date">{newDate.toLocaleDateString()}</p>
        </div>
        <div className="video-info__socials">
          <div className="video-info__socials">
            <img src={ViewsIcon} className="video-info__views-img" alt="Eye of Sauron"/>
            <p className="video-info__views-num">{CurrentVideo.views}</p>
          </div>
          <div className="video-info__likes">
            <img src={LikesIcon} className="video-info__likes-img" alt="likes heart"/>
            <p className="likes-count" className="video-info__likes-num">{CurrentVideo.likes}</p>
          </div>
        </div>
      </div>

      <div className="video-info__bottom-border"></div>
      <p className="video-info__biography">{CurrentVideo.description}</p>
    </div>
      
  )
}

export default VideoInfo
