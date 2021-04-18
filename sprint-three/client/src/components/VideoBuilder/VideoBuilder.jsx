import React from 'react'; 
import './VideoBuilder.scss';
import { Link } from 'react-router-dom';
 
 const VideoBuilder = ({aside}) => { 
   const videoList = aside.map((obj) => { 
     return ( 
       <Link to={`/video/${obj.id}`} div key={obj.id} className="video-builder__container"> 
          <div className="video-builder__imgbox">
            <img 
              src={obj.image} 
              alt={obj.title}
              className="video-builder__img"  
            /> 
          </div> 
         <div className="video-builder__titles-container"> 
           <p className="video-builder__title">{obj.title}</p> 
           <p className="video-builder__channel">{obj.channel}</p> 
         </div>
        </Link> 

     
       
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

export default VideoBuilder;
