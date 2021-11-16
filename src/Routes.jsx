import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NotFound } from './pages/404';
import { Home } from './pages/Home';
import { Login } from './pages/Login/index.';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" element={Home} />
        <Route exact path="/login" element={Login} />
        <Route element={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};
