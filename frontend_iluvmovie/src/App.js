import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './stylesheets/App.css';

import Entrance from './components/pages/Entrance'
import SignInPage from './components/pages/SignInPage'
import SignUpPage from './components/pages/SignUpPage'

import NavBar from './components/NavBar'
import Home from './components/pages/Home'
import Favorites from './components/pages/Favorites'

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
      <Fragment>
        <NavBar/>
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/Favorites' component={Favorites} />
          <Redirect to='/home' />
        </Switch>
      </Fragment>
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
