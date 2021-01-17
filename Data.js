import React from 'react';
import {Container} from 'react-bootstrap';
import Truthbar from './Truthbar'

class Userinfo extends React.Component {
  state = {
    score: 0,
    numEntries: 1,
    length: 12,
    sty: {height: '100px'}
  }

  getScore = () => {

    this.setState({
      score: this.props.score,
      numEntries: this.props.entries,
      sty: {height: this.props.score + 'px'}
    })

  }


  render() {
    return (
      <div id = "dataPage">
        <Container>
          <h2 className = "App-header">Truth Rating</h2>
          <Truthbar truth = {this.props.score / this.props.entries}/>
        </Container>
      </div>
    )
  }
}


export default Userinfo;