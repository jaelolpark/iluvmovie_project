import React, { Component } from 'react'
import { Button, Form, Input } from 'semantic-ui-react';
import '../../stylesheets/FirstPage.css'

import '../../stylesheets/FirstPage.css'

export default class SignInPage extends Component {
  render() {
    return (
      <div id='background-page' className='ui inverted vertical center aligned segment'>
        <Form id='signup' className="ui inverted form">
          <h1 className='title'>Sign-Up</h1>
          <Form.Field>
            <Input icon='user' iconPosition='left' placeholder="Username" type="text"/>
          </Form.Field>
          <Form.Field>
            <Input icon='lock' iconPosition='left' placeholder="Password" type="password"/>
          </Form.Field>
          <Button className='submit-btn' color='red' type='submit' fluid size='large'>Create</Button>
        </Form>



    
  </div>
    )
  }
}
