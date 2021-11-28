import React from 'react';
import './styles.css';
import Menu from '../Menu';
import menu from '../../utils/menu';

const Header = ({ title, showMenu }) => {
  return (
    <header className="header">
      <h2>{title}</h2>
      <div className="sideContainer">
        <Menu showMenu={showMenu} menu={menu} />
        {/* <Login /> */}
      </div>
    </header>
  );
};

export default Header;
