import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';


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
        <Menu pointing>
          <Link to='/home' onClick={this.getPath}>
            <Menu.Item name='home' active={this.state.path === 'Home'}/>
          </Link>

          <Link to='/Favorites' onClick={this.getPath}>
            <Menu.Item name='Favorites' active={this.state.path === 'Favorites'}/>
          </Link>

          <Menu.Menu position='right'>
            <Menu.Item name='SIGN-OUT' onClick={this.props.logout}/>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}


const MapDispatchToProps = dispatch => ({
  logout: () => dispatch({ type: "LOGOUT_USER" })
})

export default connect(null, MapDispatchToProps)(NavBar);
