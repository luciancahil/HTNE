import React from 'react';
import Truthbar from './Truthbar.component'

class Userinfo extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      score: 0,
      numEntries: 1,
      length: 12,
      sty: {height: '100px'}
    }

    this.getScore = this.getScore.bind(this);
  }

  getScore(){
    let newScore = 0;
    var data = JSON.parse(localStorage.getItem("data"));


    for(let i = 0; i < data.length; i++){

      let rating = data[i]['fact-check']

      if(rating === "true"){
        newScore += 1;
      }else if(rating === "mostly-true"){
        newScore += 4/5;
      }else if(rating === "half-true"){
        newScore += 3/5;
      }else if(rating === "barely-true"){
        newScore += 2/5;
      }else if(rating === "false"){
        newScore += 1/5;
      }else if(rating === "pants-fire"){
        newScore += 0;
      }
    }

    this.setState({
      score: newScore,
      numEntries: data.length,
      sty: {height: newScore + 'px'}
    })
  }


  componentDidMount(){
    this.getScore();
  }


  render() {
    console.log("Score: " + this.state.score);
    return (
      <div id = "dataPage">
        <h2 style={this.state.sty} className = "App-header">Truth Rating</h2>
        <Truthbar truth = {this.state.score / this.state.numEntries}/>
      </div>
    )
  }
}


export default Userinfo;