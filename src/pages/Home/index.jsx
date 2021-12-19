import React, { useEffect, useState } from 'react';
import Container from '../../components/Container';
import { useHistory } from 'react-router-dom';
import CarCard from '../../components/CarCard';
import EmployeeCard from '../../components/EmployeeCar';
import UsuarioCard from '../../components/UsuarioCard';
import api from '../../service/index';
import './styles.css';
import Loader from '../../components/Loader';

export const Home = () => {
  const history = useHistory();
  const [cars, setCars] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [users, setUsers] = useState([]);
  const [carsLoading, setCarsLoading] = useState(true);
  const [employeesLoading, setEmployeesLoading] = useState(true);
  const [usersLoading, setUsersLoading] = useState(true);

  useEffect(() => {
    setCarsLoading(true);
    api.get('/veiculos').then((response) => {
      setCars(response.data);
      setCarsLoading(false);
    });
  }, []);

  useEffect(() => {
    setEmployeesLoading(true);
    api.get('/funcionarios').then((response) => {
      setEmployees(response.data);
      setEmployeesLoading(false);
    });
  }, []);

  useEffect(() => {
    setUsersLoading(true);
    api.get('/usuarios').then((response) => {
      setUsers(response.data);
      setUsersLoading(false);
    });
  }, []);

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
          {carsLoading ? <Loader /> : <></>}
          <ul className="carList">
            {cars ? (
              cars.map((car) => {
                return (
                  <CarCard
                    key={car.id}
                    id={car.id}
                    cor={car.cor}
                    tipoVeiculo={car.tipoDeVeiculo}
                    marca={car.marcaDoVeiculo}
                    modelo={car.modeloDeVeiculo}
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
          {employeesLoading ? <Loader /> : <></>}
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
          {usersLoading ? <Loader /> : <></>}
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
