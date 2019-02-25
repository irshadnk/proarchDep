import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Router} from 'react-router-dom';
import Dashboard from './components/home/dashboard';
import { history } from './helpers';
import User from './components/registration/user';
import LoginCointainer from './components/login/LoginContainer';
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import alertActions from './actions/alert.actions'
import { PrivateRoute } from './helpers/privateRoute';
import './css/common.css'
class App extends Component {

  constructor(props){
    super(props);
    
    history.listen((location, action) => {
      // clear alert on location change
      alertActions.clear()
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NotificationContainer/>
          
          <Router history={history}>
          <Switch>
            <Route exact path="/" component={LoginCointainer}></Route>
            <Route exact path="/login" component={LoginCointainer}></Route>
            <Route exact path="/registration" component={User}></Route>
            <PrivateRoute exact path="/home" component={Dashboard}></PrivateRoute>
            
           
          </Switch>
          </Router>
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
