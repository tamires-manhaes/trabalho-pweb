import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Container from '../../components/Container';
import axios from 'axios';
import api from '../../service/index'
import crypto from 'crypto'
import './styles.css';

const NewEmployee = () => {
  const history = useHistory();
  const [ufs, setUfs] = useState([]);

  const [nome, setNome] = useState('');
  const [matricula, setMatricula] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [cnh, setCnh] = useState('');
  const [email, setEmail] = useState('');
  const [bairro, setBairro] = useState('');
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [complemento, setComplemento] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [uf, setUf] = useState('');

  

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      cpf,
      nome,
      rg,
      cnh,
      email,
      matricula,
      endereco : {
        logradouro,
        bairro,
        cidade,
        uf,
        cep,
        numero: parseInt(numero, 10),
        complemento,
      },
    }

    try {
      await api.post('/funcionarios', data);
      history.push('/');
    } catch (e) {
      console.log(e)
      alert('Erro ao cadastrar, tente novamente', e);
    }
  }

  return (
    <Container
      title="PWEB Cars"
      onClick={redirectToHome}
      showButton
      buttonTittle="Voltar a home"
    >
      <div className="newEmployee">
      <h3>Cadastro de Funcionário</h3>
        <form onSubmit={handleSubmit}>
          <div className="inputGroup">
            <input type="text" value={nome} onChange={e => setNome(e.target.value)} placeholder="nome" className="width100" />
          </div>
          <div className="inputGroup">
            <input type="text" value={cpf} onChange={e => setCpf(e.target.value)} placeholder="cpf" className="width33" />
            <input type="text" value={rg} onChange={e => setRg(e.target.value)}placeholder="rg" className="width33" />
            <input type="text" value={cnh} onChange={e => setCnh(e.target.value)} placeholder="cnh" className="width33" />
          </div>
          <div className="inputGroup">
            <input type="text" value={logradouro} onChange={e => setLogradouro(e.target.value)} placeholder="logradouro" className="width100" />
          </div>
          <div className="inputGroup">
            <input type="text" value={bairro} onChange={e => setBairro(e.target.value)} placeholder="bairro" className="width33" />
            <input type="text" value={cidade} onChange={e => setCidade(e.target.value)} placeholder="cidade" className="width33" />
            <select onChange={e => setUf(e.target.value)} className="width33">
              <option>Estado</option>
              {ufs ? (
                ufs.map((uf) => (
                  <option value={uf.sigla} key={uf.nome}>
                    {uf.nome}
                  </option>
                ))
              ) : (
                <option>nenhum</option>
              )}
            </select>
          </div>
          <div className="inputGroup">
            <input type="text" value={cep} onChange={e => setCep(e.target.value)} placeholder="cep" className="width33" />
            <input type="text" value={numero} onChange={e => setNumero(e.target.value)} placeholder="numero" className="width33" />
            <input type="text" value={complemento} onChange={e => setComplemento(e.target.value)} placeholder="complemento" className="width33" />
          </div>
          <div className="inputGroup">
            <input type="text" value={matricula} onChange={e => setMatricula(e.target.value)} placeholder="matricula" className="width50" />
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="email" className="width50" />
          </div>
          <div className="inputGroup">
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default NewEmployee;
