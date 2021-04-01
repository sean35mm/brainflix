import React from 'react';
import Logo from '../../assets/Logo/Logo-brainflix.svg';
import Magnifyer from '../../assets/Icons/SVG/Icon-search.svg';
import Upload from '../../assets/Icons/SVG/Icon-upload.svg';
import Mohan from '../../assets/Images/Mohan-muruge.jpg';

const Header = () => {
  return (
    <div>
      <a className="xx" href="./Header.jsx">
        <img className="xx" src={Logo} alt="Brainflix logo" />
      </a>
      <form className="xx">
          <img className="xx" src={Magnifyer} alt="Magnifying glass" />
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