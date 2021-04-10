import React from 'react';
import Thumbnail from '../../assets/images/Upload-video-preview.jpg';

import './Upload.scss';

const Upload = () => {
  return(
    <>
      <div className="upload">
          <h1 className="upload__title">Upload Video</h1>
          <div className="upload__container">
            <div className="upload__border"></div>
            <div className="upload__thumbnail"></div>
              <h3 className="upload__thumbnail-title">VIDEO THUMBNAIL</h3>
              <img src={Thumbnail} alt="thumbnail" className="upload__thumbnail-img"/>
          </div>
          <form name="upload__form" className="upload__form">
          <ul className="upload__form-list">
            <li className="upload__form-video-title">
              <label htmlFor="upload__form">TITLE YOUR VIDEO</label>
              <textarea className="upload__form-input1" type="text" name="title" placeholder="Add a title to your video"></textarea>
            </li>
            <li className="upload__form-video-description">
              <label htmlFor="upload__form">ADD A VIDEO DESCRIPTION</label>
              <textarea className="upload__form-input2" type="text" placeholder="A description of your video" name="description"></textarea>
            </li>
          </ul>
          </form>
      </div>
        <div className="upload__button">
          <div className="upload__button-publish-container">
            <button className="upload__button-publish">PUBLISH</button>
          </div>
          <div className="upload__button-cancel-container">
            <button className="upload__button-cancel">CANCEL</button>
          </div>
        </div>
    </>  
  )
}

export default Upload;