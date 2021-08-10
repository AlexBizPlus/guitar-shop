import { Route, Switch, Redirect } from 'react-router-dom';
import { Routes } from '../../const';
import { publicRoutes } from '../../routes';

const AppRouter = () => (
  <Switch>
    {publicRoutes.map(({ path, Component }, i) => (
      <Route key={i} path={path} component={Component} exact={true} />
    ))}
    <Redirect to={Routes.ERROR404} />
  </Switch>
);

export default AppRouter;
