import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

const UserCard = ({
  id,
  nome,
  email,
  matricula,
  login
}) => {
  const history = useHistory();

  const redirectToDetails = (id) => {
    return history.push(`/car-details/${id}`);
  };

  return (
    <li className="userCard">
      <h3>{nome}</h3>
      <span>email: {email}</span>
      <span>matricula: {matricula}</span>
      <span>login: {login}</span>
      <button onClick={() => redirectToDetails(id)}>Mais informações</button>
    </li>
  );
};

export default UserCard;
