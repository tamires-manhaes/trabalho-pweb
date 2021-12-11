import React from 'react';
import './styles.css';
import Header from '../Header';

const Container = ({ children, showButton, title }) => {
  return (
    <div className="container">
      <Header showButton={showButton} title={title} />
      {children}
    </div>
  );
};

export default Container;
