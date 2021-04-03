import React from 'react';
import ViewsIcon from "../../Assets/Icons/Icon-views.svg";
import LikesIcon from "../../Assets/Icons/Icon-likes.svg";

const VideoInfo = ({CurrentVideo}) => {
  return (
    <div key={CurrentVideo.id}>
      <h1>{CurrentVideo.title}</h1>
      <div>
        <div>
          <p>By {CurrentVideo.channel}</p>
          <p>{CurrentVideo.timestamp}</p>
        </div>
        <div className="socials">
          <img src={ViewsIcon} className="view-img" alt="Eye of Sauron"/>
          <p className="view-count">{CurrentVideo.views}</p>
        </div>
        <div>
          <img src={LikesIcon} alt="likes heart"/>
          <p className="likes-count">{CurrentVideo.likes}</p>
        </div>
      </div>
      <div className="bottom-border"></div>
      <p>{CurrentVideo.description}</p>
    </div>
      
  )
}

export default VideoInfo
