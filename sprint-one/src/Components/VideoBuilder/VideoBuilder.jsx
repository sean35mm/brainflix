import React from 'react' 
 
 const VideoBuilder = ({VideoList, updateVideo}) => { 
   const videoList = VideoList.map((obj) => { 
     return ( 
       <div key={obj.id} className="videoBuilder__container"> 
         <div> 
           <img 
              src={obj.image} 
              alt={obj.title} 
              onClick= {() => updateVideo(obj)} 
           /> 
           <div className="videoBuilder__text-container"> 
             <p>{obj.title}</p> 
             <p>{obj.channel}</p> 
           </div> 
         </div> 
       </div> 
     ); 
   });
   return (
     <div>
       <div className="videoBuilder-border"></div>
       <h3>NEXT VIDEO</h3>
       {videoList}
     </div>
   )
}

export default VideoBuilder
