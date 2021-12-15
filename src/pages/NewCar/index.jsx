import { useHistory } from 'react-router-dom';
import Container from '../../components/Container';
import './styles.css';

const NewCar = () => {
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
      <div className="newClient">
        <form>
          <div className="inputGroup">
            <input type="text" placeholder="placa" className="width50" />
            <input type="text" placeholder="cor" className="width50" />
          </div>
          <div className="inputGroup">
            <input type="text" placeholder="chassi" className="width33" />
            <input type="text" placeholder="renavan" className="width33" />
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
