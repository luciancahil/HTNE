import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from "./Landing.component";
import Data from "./Data.component";


class Userinfo extends React.Component {
  render() {
    return (
      <div id = "content">
        <Router>
          <Route path="/" exact render={(props) => <Landing/>} />
          <Route path="/data" render={(props) => <Data/>} />
        </Router>
      </div>

    )
  }
}


export default Userinfo;