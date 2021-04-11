import React from 'react';
import Thumbnail from '../../assets/images/Upload-video-preview.jpg';

import './Upload.scss';

const Upload = (props) => {
  
  const onSubmit = (e) => {
    e.preventDefault();
    alert('Back to the home page')
    props.history.goBack()
    
  }

  return(
    <>
      <div className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <div className="upload__container">
          <div className="upload__border" />
          <div className="upload__thumbnail">
            <p className="upload__thumbnail-title" >VIDEO THUMBNAIL</p>
            <img src={Thumbnail} className="upload__thumbnail-img" alt="Bike ride"/>
          </div>
          <form onSubmit={(e) => {onSubmit(e)}} className="upload__form" name="upload__form">
          <ul className="upload__form-list">
            <li className="upload__form-video-title">
              <label id="vid-title" htmlFor="upload__form">TITLE YOUR VIDEO</label>
              <textarea className="upload__form-vid-input1" type="text" id="title-input" name="user-title" placeholder="Add a title to your video" />
            </li>
            <li className="upload__form-video-description">
              <label id="vid-description" htmlFor="upload__form">ADD A VIDEO DESCRIPTION</label>
              <textarea className="upload__form-vid-input2" type="text" id="vid-description" name="user-description" placeholder="Add a description of your video" />
            </li>
          </ul>
            <div className="upload__button">
              <div className="upload__button-publish-container">
                <button className="upload__button-publish">PUBLISH</button>
              </div>
              <div className="upload__button-cancel-container">
              <button className="upload__button-cancel">CANCEL</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>  
  )
}

export default Upload;