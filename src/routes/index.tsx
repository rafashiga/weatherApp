import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/index';
import Weather from '../pages/Weather/index';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/weather" exact component={Weather} />
  </Switch>
);

export default Routes;
