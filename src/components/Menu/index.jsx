import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Menu = ({ menu, showMenu }) => {
  return showMenu ? (
    <ul className="menu">
      {menu
        ? menu.map((item) => (
            <li key={item.id} className="item">
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))
        : ''}
    </ul>
  ) : (
    ''
  );
};

export default Menu;
