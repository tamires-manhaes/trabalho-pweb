import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Container from '../../components/Container';
import api from '../../service';
import './styles.css';

const NewCar = () => {
  const history = useHistory();
  const [placa, setPlaca] = useState('');
  const [cor, setCor] = useState('');
  const [chassi, setChassi] = useState('');
  const [renavan, setRenavan] = useState('');
  const [tipoVeiculo, setTipoVeiculo] = useState('');

  const redirectToHome = () => {
    return history.push('/');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      placa,
      cor,
      chassi,
      renavan,
      tipoDeVeiculo: parseInt(tipoVeiculo, 10),
    };

    try {
      await api.post('/veiculos', data);
      history.push('/');
    } catch (e) {
      alert('Erro ao cadastrar, tente novamente', e);
    }
  };

  return (
    <Container
      title="PWEB Cars"
      onClick={redirectToHome}
      showButton
      buttonTittle="Voltar a home"
    >
      <div className="newCar">
        <h3>Cadastro de Veículo</h3>
        <form onSubmit={handleSubmit}>
          <div className="inputGroup">
            <input
              type="text"
              required
              value={placa}
              onChange={(e) => setPlaca(e.target.value)}
              placeholder="placa"
              className="width50"
            />
            <input
              type="text"
              required
              value={cor}
              onChange={(e) => setCor(e.target.value)}
              placeholder="cor"
              className="width50"
            />
          </div>
          <div className="inputGroup">
            <input
              type="text"
              required
              value={chassi}
              onChange={(e) => setChassi(e.target.value)}
              placeholder="chassi"
              className="width33"
            />
            <input
              type="text"
              required
              value={renavan}
              onChange={(e) => setRenavan(e.target.value)}
              placeholder="renavan"
              className="width33"
            />
            <select
              required
              onChange={(e) => setTipoVeiculo(e.target.value)}
              className="width33"
            >
              <option>Tipo de veículo</option>
              <option value={0}>Utilitário</option>
              <option value={1}>Passeio</option>
              <option value={2}>Familiar</option>
              <option value={3}>Esportivo</option>
            </select>
          </div>
          <div className="inputGroup">
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default NewCar;
