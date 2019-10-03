import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react'

class NavBar extends Component {
  handleSignout = () => {
    this.props.history.push('/')
    localStorage.clear()
 } 


  render() {

    return (
      <div>
       <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item
            name='home'
            active={this.props.location.pathname==='/home'}
            onClick={() => this.props.history.push('/home')}/>
          <Menu.Menu position='right'>
            <Menu.Item
              name='SIGN-OUT'
              onClick={this.handleSignout}/>
          </Menu.Menu>
        </Menu>
      </Segment>
      </div>
    )
  }
}

export default withRouter(NavBar);

