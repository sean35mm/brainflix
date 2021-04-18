import React from 'react';
import ViewsIcon from "../../assets/icons/Icon-views.svg";
import LikesIcon from "../../assets/icons/Icon-likes.svg";
import './VideoInfo.scss';

const VideoInfo = ({vidInfo}) => {
  return vidInfo.map(obj => {
    const newDate = new Date(obj.timestamp);

    return (
      <div className="video-info" key={obj.id}>
        <h1 className="video-info__title">{obj.title}</h1>
  
        <div className="video-info__info">
          <div className="video-info__subtitle">
            <p className="video-info__subtitle-author">By {obj.channel}</p>
            <p className="video-info__subtitle-date">{newDate.toLocaleDateString()}</p>
          </div>
          <div className="video-info__socials">
            <div className="video-info__socials">
              <img src={ViewsIcon} className="video-info__views-img" alt="Eye of Sauron"/>
              <p className="video-info__views-num">{obj.views}</p>
            </div>
            <div className="video-info__likes">
              <img src={LikesIcon} className="video-info__likes-img" alt="likes heart"/>
              <p className="likes-count" className="video-info__likes-num">{obj.likes}</p>
            </div>
          </div>
        </div>
  
        <div className="video-info__bottom-border"></div>
        <p className="video-info__biography">{obj.description}</p>
      </div>
  

    )
  
  })
}

export default VideoInfo;
