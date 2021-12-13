import React from 'react';
import './styles.css';
import Header from '../Header';

const Container = ({ children, showButton, title, onClick, buttonTittle }) => {
  return (
    <div className="container">
      <Header
        showButton={showButton}
        onClick={onClick}
        buttonTitle={buttonTittle}
        title={title}
      />
      {children}
    </div>
  );
};

export default Container;
