import { BrowserRouter, Route, Switch } from 'react-router-dom';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={() => <h1>home</h1>} />
      </Switch>
    </BrowserRouter>
  );
};
