import React, { useEffect, useState } from 'react';
import Container from '../../components/Container';
import { useHistory } from 'react-router-dom';
import CarCard from '../../components/CarCard';
import EmployeeCard from '../../components/EmployeeCar';
import UsuarioCard from '../../components/UsuarioCard';
import api from '../../service/index';
import './styles.css';

export const Home = () => {
  const history = useHistory();
  const [cars, setCars] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get('/veiculos').then((response) => {
      setCars(response.data);
    });
  }, []);

  useEffect(() => {
    api.get('/funcionarios').then((response) => {
      setEmployees(response.data);
    });
  },[])

  useEffect(() => {
    api.get('/usuarios').then((response) => {
      console.log(response.data)
      setUsers(response.data);
    });
  },[])

  const redirectToLogin = () => {
    return history.push('/newUser');
  };

  return (
    <Container
        title="PWEB Cars"
        onClick={redirectToLogin}
        showButton
        buttonTittle="Dashboard"
      >
      <div className="homePage">
        <div className="cardsBox">
          <h3>Carros disponíveis</h3>
          <ul className="carList">
            {cars ? (
              cars.map((car) => {
                return (
                  <CarCard
                    key={car.id}
                    id={car.id}
                    cor={car.cor}
                    tipoVeiculo={car.tipoDeVeiculo}
                  />
                );
              })
            ) : (
              <span>nenhum carro a ser exibido</span>
            )}
          </ul>
        </div>

        <div className="cardsBox">
          <h3>Funcionarios disponíveis</h3>
          <ul className="carList">
            {employees ? (
              employees.map((emp) => {
                return (
                  <EmployeeCard
                    key={emp.id}
                    id={emp.id}
                    nome={emp.nome} 
                    email={emp.email} 
                    matricula={emp.matricula}
                  />
                );
              })
            ) : (
              <span>nenhum carro a ser exibido</span>
            )}
          </ul>
        </div>

        <div className="cardsBox">
          <h3>Funcionarios disponíveis</h3>
          <ul className="carList">
            {users ? (
              users.map((user) => {
                return (
                  <UsuarioCard
                    key={user.id}
                    id={user.id}
                    nome={user?.funcionario?.nome} 
                    email={user?.funcionario?.email} 
                    matricula={user?.funcionario?.matricula}
                    login={user?.login}
                  />
                );
              })
            ) : (
              <span>nenhum carro a ser exibido</span>
            )}
          </ul>
        </div>
      </div>
    </Container>
  );
};
