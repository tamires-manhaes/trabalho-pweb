import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Container from '../../components/Container';
import api from '../../service/index';
import {
  getCarBrand,
  getCarDoors,
  getCarModel,
  getCarType,
} from '../../utils/car';
import './styles.css';

const CarDetails = () => {
  const history = useHistory();
  const [car, setCar] = useState({});
  let { id } = useParams();

  const redirectHome = () => {
    return history.push('/');
  };

  const deleteCar = () => {
    api.delete(`/veiculos/${id}`).then(history.push('/'));
  };

  useEffect(() => {
    api.get(`/veiculos/${id}`).then((response) => {
      setCar(response.data);
    });
  }, [id]);

  let marca = getCarBrand(car?.marcaDoVeiculo);
  let modelo = getCarModel(car?.modeloDeVeiculo);
  let qtdPortas = getCarDoors(car?.portasDoVeiculo);
  let tipo = getCarType(car?.tipoDeVeiculo);

  return (
    <Container
      title="Informações veículo"
      buttonTittle="voltar a home"
      onClick={redirectHome}
      showButton
    >
      <div className="carDetails">
        <h3>
          {marca} {modelo}
        </h3>

        <div className="row">
          <strong>Qtd portas:</strong>
          <span>{qtdPortas}</span>
        </div>

        <div className="row">
          <strong>Tipo:</strong>
          <span>{tipo}</span>
        </div>

        <div className="row">
          <strong>Cor:</strong>
          <span>{car.cor}</span>
        </div>

        <div className="row">
          <strong>Placa:</strong>
          <span>{car.placa}</span>
        </div>

        <div className="row">
          <strong>Renavam:</strong>
          <span>{car.renavam}</span>
        </div>

        <div className="row">
          <strong>Chassi:</strong>
          <span>{car.chassi}</span>
        </div>

        <div className="row">
          <button onClick={deleteCar}>Deletar este veículo</button>
        </div>
      </div>
    </Container>
  );
};

export default CarDetails;
