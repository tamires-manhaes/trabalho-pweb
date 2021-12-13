import { useHistory } from 'react-router-dom';
import Container from '../../components/Container';

import './styles.css';

const NewClient = () => {
  const history = useHistory();
  const redirectToHome = () => {
    return history.push('/login');
  };

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
            <select className="width50">
              <option>PCD</option>
              <option value={true}>sim</option>
              <option value={false}>não</option>
            </select>
            <input type="text" placeholder="cnh" className="width50" />
          </div>
          <div className="inputGroup">
            <input type="text" placeholder="email" className="width50" />
            <input type="text" placeholder="senha" className="width50" />
          </div>
          <div className="inputGroup">
            <button type="submit">Entrar</button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default NewClient;
