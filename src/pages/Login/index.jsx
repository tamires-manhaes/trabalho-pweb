import Container from '../../components/Container';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';

const Login = () => {
  const history = useHistory();

  const redirectToHome = () => {
    return history.push('/');
  };
  return (
    <Container
      title="Login"
      onClick={redirectToHome}
      showButton
      buttonTittle="Voltar a home"
    >
      <div className="loginPage">
        <form className="formLogin">
          <input type="text" placeholder="email ou cpf" />
          <input type="password" placeholder="senha" />
          <button type="submit">Entrar</button>
          <Link to="/newUser">Novo(a) aqui? cadastre-se</Link>
        </form>
      </div>
    </Container>
  );
};

export default Login;
