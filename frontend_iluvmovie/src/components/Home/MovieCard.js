import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Card, Image } from 'semantic-ui-react';
import { getMovieDetails } from '../../actions/movieActions'
import { Link } from "react-router-dom";

class MovieCard extends Component {
  render() {
    return (
        <Card id='movie-card'>
          <Link to={"/movies/" + this.props.movieId} >
            <Image src={this.props.img}/>
          </Link>
        </Card>
    )
  }
}
const mapStatetoProps = state => {
  return ({
    movieInfo: state.movieInfo
  })
}

const mapDispatchToProps = dispatch => ({
  getMovieDetails: () => dispatch( getMovieDetails() )
})

export default connect(mapStatetoProps, mapDispatchToProps)(MovieCard)