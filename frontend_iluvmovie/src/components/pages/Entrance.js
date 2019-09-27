import React, { Component } from 'react'
import '../../stylesheets/Entrance.css'
import { Button } from 'semantic-ui-react';

export default class Entrance extends Component {
  render() {
    return (
      <div id='background-page' className='ui inverted vertical center aligned segment'>
        <div>
          <h1 id='first-title'>I LUV MOVIE</h1>
          <Button 
            id='signin-btn' onClick={() => this.props.history.push('/sign-in')} >
            Sign-In  
          </Button>

          <Button
            id='signup-btn' onClick={() => this.props.history.push('/sign-up')}>
            Sign-Up  
          </Button>
        </div>
      </div>
    )
  }
}
