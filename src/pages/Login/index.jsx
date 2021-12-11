import Container from '../../components/Container';
import { Link } from 'react-router-dom';
import './styles.css';

const Login = () => {
  return (
    <Container title="Login">
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
