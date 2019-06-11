import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import SignupPage from 'containers/Signup';
import LoginPage from 'containers/Login';
import InitialPage from 'containers/InitialPage';
import Dashboard from 'containers/Dashboard';
import { RoutesTypeKeys } from 'consts';

const App: React.FC = () => {
  return (
    <Switch>
      <Route path={RoutesTypeKeys.Start} component={InitialPage} />
      <Route path={RoutesTypeKeys.Signup} component={SignupPage} />
      <Route path={RoutesTypeKeys.Login} component={LoginPage} />
      <Route path={RoutesTypeKeys.Dashboard} component={Dashboard} />
      <Redirect from="*" to="/start" />
    </Switch>
  );
};

export default App;
