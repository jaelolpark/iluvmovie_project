import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './stylesheets/App.css';

import FirstPage from './components/pages/FirstPage'
import SignInPage from './components/pages/SignInPage'
import SignUpPage from './components/pages/SignUpPage'

class App extends Component {
  render() { 
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={FirstPage} />
          <Route exact path='/sign-in' component={SignInPage} />
          <Route exact path='/sign-up' component={SignUpPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
