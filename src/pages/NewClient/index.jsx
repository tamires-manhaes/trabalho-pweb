import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Container from '../../components/Container';
import api from '../../service';
import './styles.css';

const NewClient = () => {
  const history = useHistory();
  const [ufs, setUfs] = useState([]);
  const [cnh, setCnh] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [bairro, setBairro] = useState('');
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [complemento, setComplemento] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [uf, setUf] = useState('');
  const [matricula, setMatricula] = useState('');
  const [nome, setNome] = useState('');
  const [rg, setRg] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

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
  
        cnh,
        cpf,
        email,
        endereco: {
          bairro,
          cep,
          cidade,
          complemento,
         
          logradouro,
          numero,
          uf,
        },
        
        matricula,
        nome,
        rg,
    
     
      login,
      senha,
    }

    try {
      await api.post('/usuarios', data);
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
      <div className="newClient">
      <h3>Cadastro de Clientes</h3>
        <form onSubmit={handleSubmit}>
          <div className="inputGroup">
            <input type="text" value={nome} onChange={e=>setNome(e.target.value)} placeholder="nome" className="width50" />
            <input type="text" value={email} onChange={e=>setEmail(e.target.value)} placeholder="email" className="width50" />
          </div>
          <div className="inputGroup">
            <input type="text" value={cpf} onChange={e=>setCpf(e.target.value)} placeholder="cpf" className="width33" />
            <input type="text" value={rg} onChange={e=>setRg(e.target.value)} placeholder="rg" className="width33" />
            <input type="text" value={cnh} onChange={e=>setCnh(e.target.value)} placeholder="cnh" className="width33" />
          </div>
          <div className="inputGroup">
            <input type="text" value={logradouro} onChange={e=>setLogradouro(e.target.value)} placeholder="logradouro" className="width100" />
          </div>
          <div className="inputGroup">
            <input type="text" value={bairro} onChange={e=>setBairro(e.target.value)} placeholder="bairro" className="width50" />
            <input type="text" value={cidade} onChange={e=>setCidade(e.target.value)} placeholder="cidade" className="width50" />
          </div>
          <div className="inputGroup">
            <select onChange={e=>setUf(e.target.value)} className="width33">
              <option>Estado</option>
              {ufs ? (
                ufs.map((uf) => (
                  <option value={uf.id} key={uf.nome}>
                    {uf.nome}
                  </option>
                ))
              ) : (
                <option>nenhum</option>
              )}
            </select>
            <input type="text" value={cep} onChange={e=>setCep(e.target.value)} placeholder="cep" className="width33" />
            <input type="text" value={numero} onChange={e=>setNumero(e.target.value)} placeholder="numero" className="width33" />
          </div>
          <div className="inputGroup">
            <input type="text" value={complemento} onChange={e=>setComplemento(e.target.value)} placeholder="complemento" className="width100" />
          </div>
          <div className="inputGroup">
            <input type="text" value={login} onChange={e=>setLogin(e.target.value)} placeholder="login" className="width50" />
            <input type="password" value={senha} onChange={e=>setSenha(e.target.value)} placeholder="senha" className="width50" />
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
