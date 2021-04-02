import React from 'react';
import Logo from '../../Assets/Logo/Logo-brainflix.svg';
import Magnifier from '../../Assets/Icons/Icon-search.svg';
import Upload from '../../Assets/Icons/Icon-upload.svg';
import Mohan from '../../Assets/Images/Mohan-muruge.jpg';

const Header = () => {
  return (
    <div>
      <a className="xx" href="./Header.jsx">
        <img className="xx" src={Logo} alt="logo" />
      </a>
      <form className="xx">
          <img className="xx" src={Magnifier} alt="magnifier-icon" />
          <input className="xx" placeholder="Search" />
      </form>
      <div className="xx">
        <button className="xx">
          <img className="xx" src={Upload} alt="Upload button" />
          UPLOAD
        </button>
          <img className="xx" src={Mohan} alt="User Mohan badge" />
      </div>
    </div>
  )
};

export default Header; 