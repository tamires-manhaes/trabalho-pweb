import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  getCarBrand,
  getCarModel,
  getCarDoors,
  getCarType,
} from '../../utils/car';
import './styles.css';

const CarCard = ({ id, tipoVeiculo, cor, qtdPortas, marca, modelo }) => {
  const history = useHistory();

  const details = (id) => {
    return history.push(`/car-details/${id}`);
  };

  let marcaFormated = getCarBrand(marca);
  let modeloFormated = getCarModel(modelo);
  let qtdPortasFormated = getCarDoors(qtdPortas);
  let tipo = getCarType(tipoVeiculo);

  return (
    <li className="carCard">
      <div className="infos">
        <h3>
          {marcaFormated} {modeloFormated}
        </h3>
        <span>Tipo: {tipo}</span>
        <span>Cor: {cor}</span>
        <span>Qtd portas: {qtdPortasFormated}</span>
      </div>
      <button onClick={() => details(id)}>Mais informações</button>
    </li>
  );
};

export default CarCard;
