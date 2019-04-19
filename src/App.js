import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Signin from './pages/loginsignin/Signin'
import LoginContainer from './pages/loginsignin/LoginContainer'
import SigninContainer from './pages/loginsignin/SigninContainer'
import Dashboard from './pages/dashboard/Dashboard'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/signin" component={SigninContainer}/>
            <Route path="/login" component={LoginContainer}/>
            <Route path="/dashboard" component={Dashboard}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
