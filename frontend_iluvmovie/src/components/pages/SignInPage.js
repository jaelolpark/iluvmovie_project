import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Button, Form, Input } from 'semantic-ui-react';
import '../../stylesheets/Entrance.css'
import { userLoginFetch } from '../../actions/authActions'


class SignInPage extends Component {
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
    this.props.userLoginFetch(this.state)

   //  .then(data => {
			// if (data.user) {
			// 	localStorage.setItem('token', data.jwt)
			// 	this.props.history.push('/home')
   //      loginUser(data.user)
			// 	.then((data) => {this.props.getMovie(data.results)})
			// 	.then(() => this.props.history.push(`/home`))
			// } else {
			// 	alert("Please Sign In properly!")
			// }
   //  })
  }

  render() {
    return (
      <div id='background-page' className='ui inverted vertical center aligned segment'>
        <Form id='signup' className="ui inverted form" onSubmit={this.handleSubmit}>
          <h1 className='title'>Sign-In</h1>
          <Form.Field>
            <Input icon='user' iconPosition='left' name="username" value={this.state.username} placeholder="Username" type="text" onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <Input icon='lock' iconPosition='left' name="password" value={this.state.password} placeholder="Password" type="password" onChange={this.handleChange} />
          </Form.Field>
          <Button className='submit-btn' color='red' type='submit' fluid size='large'>Submit</Button>
        </Form>

  </div>
    )
  }
}

let mapDispatchToProps = dispatch => ({
  userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
})
  
export default connect(null, mapDispatchToProps)(SignInPage);
