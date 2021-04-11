import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/logo/Logo-brainflix.svg';
import Magnifier from '../../assets/icons/Icon-search.svg';
import Upload from '../../assets/icons/Icon-upload.svg';
import Mohan from '../../assets/images/Mohan-muruge.jpg';

import '../Header/header.scss';

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="header__logo">
        <img className="header__logo-img" src={Logo} alt="logo" />
      </Link>
      <form className="header__search-container">
          <img className="header__search-container-magnify" src={Magnifier} alt="magnifier-icon" />
          <input className="header__search-container-input" placeholder="Search" />
      </form>
      <div className="header__nav">
        <Link to="/upload" className="header__nav-link">
          <button className="header__nav-upload">
            <img className="header__nav-upload-img" src={Upload} alt="Upload button" />
            UPLOAD
          </button>
        </Link>
          <img className="header__nav-user-icon" src={Mohan} alt="User Mohan badge" />
      </div>
    </div>
  )
};

export default Header; 