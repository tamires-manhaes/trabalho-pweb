import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Container from '../../components/Container';
import api from '../../service/index';
import './styles.css';

const EmployeeDetails = () => {
  const history = useHistory();
  const [employee, setEmployee] = useState({});
  let { id } = useParams();

  const redirectHome = () => {
    return history.push('/');
  };

  const deleteEmployee = () => {
    api.delete(`/funcionarios/${id}`).then(history.push('/'));
  };

  useEffect(() => {
    api.get(`/funcionarios/${id}`).then((response) => {
      setEmployee(response.data);
    });
  }, [id]);

  return (
    <Container
      title="Informações funcionário"
      buttonTittle="voltar a home"
      onClick={redirectHome}
      showButton
    >
      <div className="employeeDetails">
        <h3>{employee?.nome}</h3>
        <div className="row">
          <strong>Endereço: </strong>
          {employee.endereco ? (
            <span>
              {employee?.endereco?.logradouro} nº{employee?.endereco?.numero},{' '}
              {employee?.endereco?.bairro}, {employee?.endereco?.cidade} -{' '}
              {employee?.endereco?.uf} {employee?.endereco?.cep}
            </span>
          ) : (
            'não informado'
          )}
        </div>
        <div className="row">
          <div className="width50">
            <strong>CPF: </strong>
            <span>{employee?.cpf}</span>
          </div>
          <div className="width50">
            <strong>RG: </strong>
            <span>{employee?.rg}</span>
          </div>
        </div>
        <div className="row">
          <div className="width50">
            <strong>CNH: </strong>
            <span>{employee?.cnh}</span>
          </div>
          <div className="width50">
            <strong>Matrícula: </strong>
            <span>{employee?.matricula}</span>
          </div>
        </div>
        <div className="row">
          <strong>Email: </strong>
          <span>{employee?.email}</span>
        </div>
        <div className="row">
          <button onClick={deleteEmployee}>Apagar esse funcionário</button>
        </div>
      </div>
    </Container>
  );
};

export default EmployeeDetails;
