import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Container from '../../components/Container';
import './styles.css';

const NewClient = () => {
  const history = useHistory();
  const [ufs, setUfs] = useState({});

  const redirectToHome = () => {
    return history.push('/');
  };

  useEffect(() => {
    axios
      .get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then((response) => {
        setUfs(response.data);
      });
  }, []);

  return (
    <Container
      title="PWEB Cars"
      onClick={redirectToHome}
      showButton
      buttonTittle="Voltar a home"
    >
      <div className="newClient">
        <form>
          <div className="inputGroup">
            <input type="text" placeholder="nome" className="width100" />
          </div>
          <div className="inputGroup">
            <input type="text" placeholder="cpf" className="width50" />
            <input type="text" placeholder="rg" className="width50" />
          </div>
          <div className="inputGroup">
            <input type="text" placeholder="cnh" className="width50" />
            <input type="text" placeholder="logradouro" className="width50" />
          </div>
          <div className="inputGroup">
            <input type="text" placeholder="bairro" className="width50" />
            <input type="text" placeholder="cidade" className="width50" />
          </div>
          <div className="inputGroup">
            <select className="width33">
              {/* <option>Estado</option>
              {ufs ? (
                ufs.map((uf) => (
                  <option value={uf.id} key={uf.nome}>
                    {uf.nome}
                  </option>
                ))
              ) : (
                <option>nenhum</option>
              )} */}
            </select>
            <input type="text" placeholder="cep" className="width33" />
            <input type="text" placeholder="numero" className="width33" />
          </div>
          <div className="inputGroup">
            <input type="text" placeholder="complemento" className="width100" />
          </div>
          <div className="inputGroup">
            <input type="text" placeholder="email" className="width50" />
            <input type="text" placeholder="senha" className="width50" />
          </div>
          <div className="inputGroup">
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default NewClient;
