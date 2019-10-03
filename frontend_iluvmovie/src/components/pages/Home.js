import React, { Component } from 'react'
import NavBar from '../NavBar'
import MovieContainer from '../Home/MovieContainer';

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
          <div>
            <MovieContainer />
          </div>
      </div>
    )
  }
}

export default Home