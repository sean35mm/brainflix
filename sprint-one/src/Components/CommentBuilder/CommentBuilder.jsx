import React from 'react';


const CommentBuilder = ({CurrentVideo}) => {
  return CurrentVideo.comments.map((obj) => {
    return (
      <div key={obj.id}>
        <div>
          <div className="circle"></div>
          <p>{obj.name}</p>
          <p>{obj.timestamp}</p>
          <p>{obj.comment}</p>
        </div>
      </div>
    )
  })
}

export default CommentBuilder;
