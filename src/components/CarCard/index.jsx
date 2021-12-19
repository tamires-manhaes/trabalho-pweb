import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

const CarCard = ({ id, tipoVeiculo, cor, qtdPortas, marca, modelo }) => {
  const history = useHistory();

  const details = (id) => {
    return history.push(`/car-details/${id}`);
  };

  return (
    <li className="carCard">
      <h3>
        {marca} {modelo}
      </h3>
      <span>Tipo: {tipoVeiculo}</span>
      <span>Cor: {cor}</span>
      <span>Qtd portas: {qtdPortas}</span>
      <button onClick={() => details(id)}>Mais informações</button>
    </li>
  );
};

export default CarCard;
