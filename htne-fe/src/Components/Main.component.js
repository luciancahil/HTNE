import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from "./Landing.component";
import Data from "./Data.component";


class Userinfo extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      data: null
    }


    this.setData = this.setData.bind(this);
  }


  setData(newData){
    
    this.setState({
      data: newData
    })
  }

  render() {
    console.log(this.state.data);
    return (
      <div id = "content">
        <Router>
          <Route path="/" exact render={(props) => <Landing {...props} setData = {this.setData}/>} />
          <Route path="/data" render={(props) => <Data {...props} setData = {this.setData}/>} />
        </Router>
      </div>

    )
  }
}


export default Userinfo;