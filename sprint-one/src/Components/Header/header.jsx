import React from 'react';
import Logo from '../../Assets/Logo/Logo-brainflix.svg';
import Magnifier from '../../Assets/Icons/Icon-search.svg';
import Upload from '../../Assets/Icons/Icon-upload.svg';
import Mohan from '../../Assets/Images/Mohan-muruge.jpg';

import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <a className="header__logo" href="./Header.jsx">
        <img className="header__logo-img" src={Logo} alt="logo" />
      </a>
      <form className="header__search-container">
          <img className="header__search-container-magnify" src={Magnifier} alt="magnifier-icon" />
          <input className="header__search-container-input" placeholder="Search" />
      </form>
      <div className="header__nav">
        <button className="header__nav-upload">
          <img className="header__nav-upload-img" src={Upload} alt="Upload button" />
          UPLOAD
        </button>
          <img className="header__nav-user-icon" src={Mohan} alt="User Mohan badge" />
      </div>
    </div>
  )
};

export default Header; 