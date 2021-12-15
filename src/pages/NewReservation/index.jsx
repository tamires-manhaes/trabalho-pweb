import { useHistory } from 'react-router-dom';
import Container from '../../components/Container';
import './styles.css';

const NewReservation = () => {
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
      <div className="newReservation">
        <form>
          <div className="inputGroup">
            <label className="width50">
              <span>Inicio:</span>
              <input type="date" placeholder="placa" />
            </label>
            <label className="width50">
              <span>Fim:</span>
              <input type="date" placeholder="cor" />
            </label>
          </div>
          <div className="inputGroup">
            <select className="width33">
              <option>veiculo</option>
              {/* {ufs ? (
                ufs.map((uf) => (
                  <option value={uf.id} key={uf.nome}>
                    {uf.nome}
                  </option>
                ))
              ) : (
                <option>nenhum</option>
              )} */}
            </select>
            <select className="width33">
              <option>cliente</option>
              {/* {ufs ? (
                ufs.map((uf) => (
                  <option value={uf.id} key={uf.nome}>
                    {uf.nome}
                  </option>
                ))
              ) : (
                <option>nenhum</option>
              )} */}
            </select>
            <select className="width33">
              <option>Seguro</option>
              {/* {ufs ? (
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

export default NewReservation;
