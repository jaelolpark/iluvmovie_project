import React, { Component } from 'react'
import MovieContainer from '../Home/MovieContainer';
import HomeBar from '../Home/HomeBar'

class Home extends Component {
  render() {
    return (
      <div>
        <HomeBar />
        <MovieContainer />
      </div>
    )
  }
}

export default Home