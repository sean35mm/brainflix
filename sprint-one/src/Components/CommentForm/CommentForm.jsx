import React from 'react';
import Mohan from '../../Assets/Images/Mohan-muruge.jpg';


const Comments = () => {
  
    return (
    <div>
      <h3 className="xx"> {this.props.commentsNumber} Comments</h3>  
        <form className="xx" name="commentForm">
          <img className="xx" src={Mohan} alt="mohan"/>
          <ul className="xx">
            <li className="xx">
              <label className="xx">JOIN THE CONVERSATION</label>
              <textarea className="xx" type="text" name="username" placeholder="Write comment here" />
            </li>
            <li className="xx">
              <button className="xx">COMMENT</button>
            </li>
          </ul>
        </form>
    </div>
    )
  
  
}

export default Comments
