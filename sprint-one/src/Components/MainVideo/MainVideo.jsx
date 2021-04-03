import React from 'react'

const MainVideo = ({CurrentVideo}) => {
    return (
      <div>
        <video controls poster={CurrentVideo.image}></video>
      </div>
    )

  }
  


export default MainVideo
