import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

const UserCard = ({ id, nome, email, cnh, cpf, rg }) => {
  const history = useHistory();

  // const redirectToDetails = (id) => {
  //   return history.push(`/user-details/${id}`);
  // };

  return (
    <li className="userCard">
      <div className="infos">
        <h3>{nome}</h3>
        <span>email: {email}</span>
        <span>cnh: {cnh}</span>
        <span>cpf: {cpf}</span>
        <span>rg: {rg}</span>
      </div>
    </li>
  );
};

export default UserCard;
