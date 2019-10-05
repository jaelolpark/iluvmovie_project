import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser, loginUser } from '../../actions/authActions'

import { Button, Form, Input } from 'semantic-ui-react';
import '../../stylesheets/Entrance.css';

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
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createUser(this.state)


    // .then(data => {
    //   if (data.user) {
    //     localStorage.setItem('token', data.jwt)
    //     this.props.history.push('/home')
    //     loginUser(data.user)
    //   } else {
    //     alert("sorry, username has already been taken")
    //   }
    // })
  }

  render() {
    return (
      <div id='background-page' className='ui inverted vertical center aligned segment'>
        <Form id='signup' className="ui inverted form" onSubmit={this.handleSubmit} >
          <h1 className='title'>Sign-Up</h1>
          <Form.Field>
            <Input icon='user' iconPosition='left' name="username" value={this.state.username} placeholder="Username" type="text" onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <Input icon='lock' iconPosition='left' name="password" value={this.state.password} placeholder="Password" type="password" onChange={this.handleChange} />
          </Form.Field>
          <Button className='create-btn' color='red' type='submit' fluid size='large'>Create</Button>
        </Form>

  </div>
    )
  }
}

const MapDispatchToProps = dispatch => ({
  createUser: userInfo => dispatch(createUser(userInfo))
})

export default connect(null, MapDispatchToProps)(SignUpPage);