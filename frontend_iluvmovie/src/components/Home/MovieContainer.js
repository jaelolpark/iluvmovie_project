import React, { Component } from 'react'
import { Card } from 'semantic-ui-react';
import MovieCard from './MovieCard'
import { connect } from 'react-redux';


class MovieContainer extends Component {



  render() {
    const eachMovie = this.props.Movies.map((movie) => 
    <MovieCard 
       key={movie.id}
       movieId={movie.id}
       img={movie['poster_240x342']} />)

    return(
       <Card.Group itemsPerRow={7}>
          {eachMovie}
       </Card.Group>
    )
  }
} 

const mapStatetoProps = state => {
  return ({
    Movies: state.Movies
  })
}

export default connect(mapStatetoProps)(MovieContainer)