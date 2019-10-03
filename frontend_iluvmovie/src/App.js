import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './stylesheets/App.css';

import Entrance from './components/pages/Entrance'
import SignInPage from './components/pages/SignInPage'
import SignUpPage from './components/pages/SignUpPage'
import Home from './components/pages/Home'

class App extends Component {

  state = {}

  getRoutes = () => {
    if (this.props.loggedIn)
      return this.loggedInRoutes()
    else
      return this.loggedOutRoutes()
  }

  loggedInRoutes = () => {
    return (
      <Switch>
        <Route exact path='/home' component={Home} />
        <Redirect to='/home' />
      </Switch>
    )
  }

  loggedOutRoutes = () => {
    return (
      <Switch>
        <Route exact path='/' component={Entrance} />
        <Route exact path='/sign-in' component={SignInPage} />
        <Route exact path='/sign-up' component={SignUpPage} />
        <Redirect to='/' />
      </Switch>
    )
  }

  render() { 
    return (
      <BrowserRouter>
        { this.getRoutes() }
      </BrowserRouter>
    );
  }
}

let MapStateToProps = state => ({
  loggedIn: state.auth.loggedIn
})

export default connect(MapStateToProps)(App);
