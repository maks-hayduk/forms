import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import SignupPage from 'containers/Signup';
import LoginPage from 'containers/Signin';
import InitialPage from 'containers/InitialPage';

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/start" component={InitialPage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/login" component={LoginPage} />
      <Redirect from="*" to="/start" />
    </Switch>
  );
};

export default App;
