import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react';


class NavBar extends Component {

  initPath = () => {
    let path = window.location.pathname
    if (path !== '/sign-in' && path !== '/sign-up')
      return path[1].toUpperCase() + path.slice(2)
    else
      return 'Home'
  }

  state = {
    path: this.initPath()
  }

  getPath = e => this.setState({ path: e.target.innerText })

  render() {
    return (
      <div>
       <Segment inverted>
        <Menu inverted pointing secondary>
          <Link to='/home' onClick={this.getPath}>
            <Menu.Item name='home' active={this.state.path === 'Home'}/>
          </Link>

          <Link to='/profile' onClick={this.getPath}>
            <Menu.Item name='profile' active={this.state.path === 'Profile'}/>
          </Link>

          <Menu.Menu position='right'>
            <Menu.Item name='SIGN-OUT' onClick={this.props.logout}/>
          </Menu.Menu>
        </Menu>
      </Segment>
      </div>
    )
  }
}


const MapDispatchToProps = dispatch => ({
  logout: () => dispatch({ type: "LOGOUT_USER" })
})

export default connect(null, MapDispatchToProps)(NavBar);
