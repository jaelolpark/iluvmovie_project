import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../actions/authActions'

import { Button, Form, Input } from 'semantic-ui-react';
import '../../stylesheets/FirstPage.css';

class SignUpPage extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    this.props.createUser(this.state)
  }

  render() {
    return (
      <div id='background-page' className='ui inverted vertical center aligned segment'>
        <Form id='signup' className="ui inverted form" onSubmit={this.handleSubmit} >
          <h1 className='title'>Sign-Up</h1>
          <Form.Field>
            <Input icon='user' iconPosition='left' name="username" placeholder="Username" type="text" onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <Input icon='lock' iconPosition='left' name="password" placeholder="Password" type="password" onChange={this.handleChange} />
          </Form.Field>
          <Button className='create-btn' color='red' type='submit' fluid size='large'>Create</Button>
        </Form>

  </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createUser: userInfo => dispatch(createUser(userInfo))
})

export default connect(null, mapDispatchToProps)(SignUpPage)