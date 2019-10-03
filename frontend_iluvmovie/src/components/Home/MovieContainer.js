import React, { Component } from 'react'
import { Card } from 'semantic-ui-react';
import MovieCard from './MovieCard'
import { connect } from 'react-redux';
import { getMovie } from '../../actions/movieActions'


class MovieContainer extends Component {

  componentDidMount() {
    this.props.getMovie()
  }

  render() {
    console.log(this.props)
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

let mapStateToProps = state => ({
  Movies: state.movies.allMovies
})

let mapDispatchToProps = dispatch => ({
  getMovie: () => dispatch( getMovie() )
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer)