import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react';


export default class MovieCard extends Component {
  render() {
    return (
      <Card id='movie-card'>
         <Image src={this.props.img}/>
      </Card>
    )
  }
}
