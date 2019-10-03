import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './stylesheets/App.css';

import Entrance from './components/pages/Entrance'
import SignInPage from './components/pages/SignInPage'
import SignUpPage from './components/pages/SignUpPage'
import Home from './components/pages/Home'

class App extends Component {
  render() { 
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Entrance} />
          <Route exact path='/sign-in' component={SignInPage} />
          <Route exact path='/sign-up' component={SignUpPage} />
          <Route exact path='/home' component={Home} />
        
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
