import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Menu, Input, Segment } from 'semantic-ui-react'

class NavBar extends Component {
  constructor() {
    super() 
    this.timeout = 0
  }

  handleSignout = () => {
    this.props.history.push('/')
    localStorage.clear()
  } 
  handleSearch = (event) => {
  event.persist()
  if (this.timeout) { clearTimeout(this.timeout) }
  this.timeout = setTimeout(() => {
     if (event.target.value === "") {
        getMovies()
        .then((data) => this.props.landMovies(data.results))
     } else {
        getSearch(event.target.value)
        .then((data) => this.props.landMovies(data.results))
     }
  }, 300)
}

  render() {
    let searchBar
    if (this.props.location.pathname === '/home') {
      searchBar = <Input icon='search' placeholder='SEARCH MOVIES' onChange={this.props.handleSearch} />
    }

    return (
      <div>
       <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item
            name='home'
            active={this.props.location.pathname==='/home'}
            onClick={() => this.props.history.push('/home')}/>
          {/* <Menu.Item
            name='favorite'
            active={this.props.location.pathname === '/favorite'}
            onClick={() => this.props.history.push('/favorite')}/> */}
          <Menu.Menu position='right'>
            <Menu.Item>
              {searchBar}
            </Menu.Item>
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

