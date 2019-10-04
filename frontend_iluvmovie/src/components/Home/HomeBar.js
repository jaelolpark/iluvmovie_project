import React, { Component } from 'react';
import { Container, Header} from 'semantic-ui-react';
import '../../stylesheets/Home.css';

class HomeBar extends Component {
   render() {
      return(
         <Container id='HomeBar-container'>
            <Header id='HomeBar-header'>I LUV MOVIE</Header> 
         </Container>
      )
   }
} 

export default (HomeBar);