import React from 'react';
import Mohan from '../../Assets/Images/Mohan-muruge.jpg';
import './CommentForm.scss';

const Comments = () => {
  
    return (
    <div>
      <h3 className="comment-count"> 3 Comments</h3>  
        <form className="comment-form" name="comment-form">
          <img className="comment-form__img" src={Mohan} alt="mohan"/>
          <ul className="comment-form__list">
            <li className="comment-form__name">
              <label className="comment-form__label">JOIN THE CONVERSATION</label>
              <textarea className="comment-form__input" type="text" name="username" placeholder="Write comment here" />
            </li>
            <li className="comment-form__button-container">
              <button className="comment-form__button">COMMENT</button>
            </li>
          </ul>
        </form>
    </div>
    )
  
  
}

export default Comments
