import { useHistory } from 'react-router-dom';
import Container from '../../components/Container';
import './styles.css';

const NewUser = () => {
  const history = useHistory();

  const redirectToHome = () => {
    return history.push('/');
  };

  return (
    <Container
      title="PWEB Cars"
      onClick={redirectToHome}
      showButton
      buttonTittle="Voltar a home"
    >
      <div className="newUserPage">
        <button onClick={() => history.push('/new/client')}>Cliente</button>
        <button onClick={() => history.push('/new/employee')}>
          Funcionário
        </button>
      </div>
    </Container>
  );
};

export default NewUser;
