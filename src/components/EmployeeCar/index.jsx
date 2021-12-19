import { useHistory } from 'react-router-dom';
import './styles.css'

const EmployeeCard = ({id, nome, email, matricula}) => {
  const history = useHistory();

  const deleteThis = (id) => {
    return history.push(`/car-details/${id}`);
  };

  return (
    <li className="employeeCard">
      <h3>{nome}</h3>
      <span>Email: {email}</span>
      <span>Matricula: {matricula}</span>
      <button onClick={() => deleteThis(id)}>Mais informações</button>
    </li>
  )
}

export default EmployeeCard
