import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = ({ title, showButton, onClick, buttonTitle }) => {
  return (
    <header className="header">
      <Link to="/">
        <h2>{title}</h2>
      </Link>
      <div className="sideContainer">
        {showButton && (
          <button onClick={onClick}>
            <span>{buttonTitle}</span>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
