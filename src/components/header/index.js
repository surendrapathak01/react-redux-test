import React from 'react';
import './styles.scss';
import Logo from '../../assets/images/logo.png';

const Header = (props) => {
  return (
    <header className="headerComponent" data-test="headerComponent">
      <div className="wrap">
        <div className="logo">
          <img src={Logo} alt="Logo" data-test="logoImg" />
        </div>
      </div>
    </header>
  );
}

export default Header;