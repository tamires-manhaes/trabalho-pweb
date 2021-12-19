import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

const CarCard = ({
  id,
  tipoVeiculo,
  cor
}) => {
  const history = useHistory();

  const deleteThis = (id) => {
    return history.push(`/car-details/${id}`);
  };

  return (
    <li className="carCard">
      <h3>{tipoVeiculo}</h3>
      <span>Cor: {cor}</span>
      <button onClick={() => deleteThis(id)}>Mais informações</button>
    </li>
  );
};

export default CarCard;
