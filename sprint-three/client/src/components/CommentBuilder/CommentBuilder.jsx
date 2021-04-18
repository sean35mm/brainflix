import React from 'react';
import './CommentBuilder.scss';


const CommentBuilder = ({comment}) => {
  return comment.map((obj) => {
    const newDate = new Date(obj.timestamp);
    return (
      <div className="comment-builder" key={obj.id}>
        <div className="comment-builder__container">
          <div className="comment-builder__circle"></div>
          <p className="comment-builder__name">{obj.name}</p>
          <p className="comment-builder__date">{newDate.toLocaleDateString()}</p>
          <p className="comment-builder__comment">{obj.comment}</p>
        </div>
      </div>
    )
  })
}

export default CommentBuilder;
