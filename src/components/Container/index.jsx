import React from 'react';
import './styles.css';
import Header from '../Header';

const Container = ({ children, showMenu, title }) => {
  return (
    <div className="container">
      <Header showMenu={showMenu} title={title} />
      {children}
    </div>
  );
};

export default Container;
