import React from 'react';

class Truthbar extends React.Component {
  render() {
      console.log(this.props.truth)
    return (
        <div id = "truthbar"> 
            <div className = "truthRanking" id = "truth">TRUTH</div>
            <div className = "truthRanking" id = "false">FALSE</div>
        </div>
    )
  }
}


export default Truthbar;