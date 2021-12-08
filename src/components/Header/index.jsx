import React from 'react';
import { useLoginContext } from '../../context/loginContext';
import { Link, useHistory } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';
import './styles.css';

const Header = ({ title, showMenu }) => {
  const history = useHistory();
  const { login } = useLoginContext();

  const goToLoginScreen = () => {
    return history.push('/login');
  };
  return (
    <header className="header">
      <Link to="/">
        <h2>{title}</h2>
      </Link>
      <div className="sideContainer">
        <button onClick={goToLoginScreen}>
          <BsPersonCircle size={18} />
          <span>Login</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
