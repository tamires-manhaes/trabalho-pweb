import { useHistory } from 'react-router-dom';
import './styles.css';

const EmployeeCard = ({ id, nome, email, matricula }) => {
  const history = useHistory();

  const redirectToDetails = (id) => {
    return history.push(`/employee-details/${id}`);
  };

  return (
    <li className="employeeCard">
      <div className="infos">
        <h3>{nome}</h3>
        <span>Email: {email}</span>
        <span>Matricula: {matricula}</span>
      </div>
      <button onClick={() => redirectToDetails(id)}>Mais informações</button>
    </li>
  );
};

export default EmployeeCard;
