import React, { useEffect, useState } from 'react';
import Container from '../../components/Container';
import { useHistory } from 'react-router-dom';
import CarCard from '../../components/CarCard';
import api from '../../service/index';
import './styles.css';

export const Home = () => {
  const history = useHistory();
  const [cars, setCars] = useState({});

  useEffect(() => {
    api.get('/cars').then((response) => {
      setCars(response.data);
      console.log(cars);
    });
  }, []);

  const redirectToLogin = () => {
    return history.push('/login');
  };

  return (
    <div className="homePage">
      <Container
        title="PWEB Cars"
        onClick={redirectToLogin}
        showButton
        buttonTittle="Login"
      >
        <ul className="carList">
          {cars.map((car) => {
            return (
              <CarCard
                key={car.id}
                id={car.id}
                name={car.name}
                cor={car.cor}
                classificationGroup={car.classificationGroup.description}
                qtdSits={car.qtdSits}
                kmsDriven={car.kmsDriven}
                available={car.available}
                qtdFuel={car.qtdFuel}
                foto={car.foto}
              />
            );
          })}
        </ul>
      </Container>
    </div>
  );
};
