import React, { Component } from 'react'
import { Card } from 'semantic-ui-react';
import MovieCard from './MovieCard'
import { connect } from 'react-redux';
import { getMovie } from '../../actions/movieActions'
import ReactLoading from 'react-loading';
import '../../stylesheets/Home.css'


class MovieContainer extends Component {

  state = {}

  componentDidMount() {
    this.props.getMovie()
  }

  renderMovieCards = () => {
    if (this.props.allMovies.length === 0) {
      return (
        <div className="loading-container">
          <ReactLoading type="cylon" color="#000" height={667} width={375} />
        </div>
      )
    }
    else {
      return (
        <div id='cardcontainer'>
        <Card.Group itemsPerRow={5} className="card-group">
        {
          this.props.allMovies.map( movie => 
            <MovieCard 
              key={movie.id}
              movieId={movie.id}
              img={movie['poster_240x342']}
            />
          )
        }
        </Card.Group>
        </div>
      )
    }
  }

  render() {
    return(
      <div className="MovieContainer">
        { this.renderMovieCards() }
      </div>
    )
  }
} 

let mapStateToProps = state => ({
  allMovies: state.movies.allMovies
})

let mapDispatchToProps = dispatch => ({
  getMovie: () => dispatch( getMovie() )
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer)
