import React from 'react'; 
import './VideoBuilder.scss';
 
 const VideoBuilder = ({VideoList, updateVideo}) => { 
   const videoList = VideoList.map((obj) => { 
     return ( 
       <div key={obj.id} className="video-builder__container"> 
         <div className="video-builder__imgbox">
           <img 
             src={obj.image} 
             alt={obj.title}
             className="video-builder__img" 
             onClick= {() => updateVideo(obj)} 
           /> 
         </div> 
        <div className="videoBuilder__titles-container"> 
          <p className="video-builder__title">{obj.title}</p> 
          <p className="video-builder__channel">{obj.channel}</p> 
        </div> 
     
       </div> 
     ); 
   });
   return (
     <div>
       <div className="video-builder"></div>
       <h3 className="video-builder__section-title">NEXT VIDEO</h3>
       {videoList}
     </div>
   )
}

export default VideoBuilder
