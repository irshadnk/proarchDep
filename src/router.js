/* *****not using right now - Now router is written in app.js*/
import React from 'react';
import { Route, Switch } from 'react-router';

import Home from './containers/home';

const Routes = props => (
  <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
  </div>
);

export default Routes;