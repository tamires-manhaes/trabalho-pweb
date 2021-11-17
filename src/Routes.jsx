import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { NotFound } from './pages/Page404';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" element={Home} />
      <Route exact path="/login" element={Login} />
      <Route element={NotFound} />
    </BrowserRouter>
  );
};
