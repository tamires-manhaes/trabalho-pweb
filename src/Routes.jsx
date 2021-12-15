import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import Login from './pages/Login';
import NewCar from './pages/NewCar';
import NewClient from './pages/NewClient';
import NewEmployee from './pages/NewEmployee';
import NewReservation from './pages/NewReservation';
import NewUser from './pages/NewUser';
import { NotFound } from './pages/Page404';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/newUser" component={NewUser} />
        <Route exact path="/new/client" component={NewClient} />
        <Route exact path="/new/employee" component={NewEmployee} />
        <Route exact path="/new/car" component={NewCar} />
        <Route exact path="/new/reservation" component={NewReservation} />
        <Route exact path="/car-details/:id" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
