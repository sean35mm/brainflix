import React from 'react'


const MainVideo = ({VideoDetails}) => {
  //Need to map the data and utilize higher order function to pass the data objects.. need to use setState somewhere I think
  const currentVideo = VideoDetails.map(obj => {
  return (
    <div>
      <div key={obj.id}>
        <video src="" poster={obj.image}  className="xx" controls></video>
      </div>
    </div>
    
    )});
    

  return currentVideo;

  

}

export default MainVideo;
