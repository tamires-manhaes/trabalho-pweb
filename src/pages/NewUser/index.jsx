import { useHistory } from 'react-router-dom';
import Container from '../../components/Container';
import './styles.css';

const NewUser = () => {
  const history = useHistory();

  return (
    <Container title="PWEB Cars">
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
