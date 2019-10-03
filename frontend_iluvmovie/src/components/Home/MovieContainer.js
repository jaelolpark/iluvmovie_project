import React, { Component } from 'react'
import { Card } from 'semantic-ui-react';

export default class Movies extends Component {
  render() {
    return(
      <div>
        <h1>movie containers</h1>
      </div>
      // <Card.Group itemsPerRow={7}>
      //    {this.props.landingMovies.map((movie) => 
      // <MovieCard 
      //    key={movie.id}
      //    movieId={movie.id}
      //    img={movie['poster_240x342']} />)}
      // </Card.Group>
    )
  }
}
