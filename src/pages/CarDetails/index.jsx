import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Container from '../../components/Container';
import api from '../../service/index';
import './styles.css';

const CarDetails = () => {
  const history = useHistory();
  const [car, setCar] = useState({});
  let { id } = useParams();

  useEffect(() => {
    api.get(`/veiculos/${id}`).then((response) => {
      console.log(response.data);
      setCar(response.data);
    });
  }, [id]);

  const redirectHome = () => {
    return history.push('/');
  };

  return (
    <Container
      title="Informações veículo"
      buttonTittle="voltar a home"
      onClick={redirectHome}
      showButton
    >
      <div className="carDetails">
        <h3>
          {car.marcaDoVeiculo}
          {car.modeloDeVeiculo}
        </h3>

        <div className="row">
          <strong>Qtd portas:</strong>
          <span>{car.portasDoVeiculo}</span>
        </div>

        <div className="row">
          <strong>Tipo:</strong>
          <span>{car.tipoDeVeiculo}</span>
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
      </div>
    </Container>
  );
};

export default CarDetails;
