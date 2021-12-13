import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

const CarCard = ({
  id,
  name,
  classificationGroup,
  cor,
  foto,
  qtdSits,
  kmsDriven,
  qtdFuel,
  available,
}) => {
  const history = useHistory();

  const redirectToDetails = (id) => {
    return history.push(`/car-details/${id}`);
  };

  return (
    <li className="carCard">
      <h3>{name}</h3>
      <img src={foto} alt="car cover" />
      <span>Cor: {cor}</span>
      <span>Classificação: {classificationGroup.description}</span>
      <span>qtd assentos: {qtdSits}</span>
      <span>kms rodados: {kmsDriven}</span>
      <span>litros de gasolina: {qtdFuel}</span>
      <span>disponivel: {available}</span>
      <button onClick={redirectToDetails}>Mais informações</button>
    </li>
  );
};

export default CarCard;
