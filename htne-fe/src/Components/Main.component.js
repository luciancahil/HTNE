import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Landing from "./Landing.component";
import Data from "./Data.component";


class Userinfo extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" exact render={(props) => <Landing/>} />
        <Route path="/data" render={(props) => <Data/>} />
      </Router>

    )
  }
}


export default Userinfo;