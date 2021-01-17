import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from "./Landing";
import Data from "./Data";


class Userinfo extends React.Component {
  state = {
    data: [],
    currScore: 'none'
  }

  setData = (newData) => {
    this.setState({
      data: newData
    })
  }

  getData = () => {
    return this.state.data;
  }

  render() {

    return (
      <div id = "content"> 
        <Landing setData = {this.setData}/>
      </div>

    )
  }
}


export default Userinfo;
