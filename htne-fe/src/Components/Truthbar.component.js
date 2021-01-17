import React from 'react';

class Truthbar extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            truthPercent: {width: '50%'},
            falsePercent: {width: '50%'},
            dummy: -1
        }

        this.setPercent = this.setPercent.bind(this); 
        console.log(this.state.truthPercent);
    }
  
    componentDidUpdate (){
        this.setPercent();
        console.log(this.props.truth);
    }


    setPercent(){
        let tPercent = this.props.truth * 100;
        
        if(isNaN(tPercent)){
            return;
        }
        let fPercent = 100 - tPercent;

        let tObj = {width: tPercent +"%"}
        let fObj = {width: fPercent + "%"}

        if(this.state.dummy !== tPercent){
            this.setState({
                truthPercent: tObj,
                falsePercent: fObj,
                dummy: tPercent
            })
        }
    }
  
  
    render() {
        console.log("tp: " + this.state.truthPercent.width);
    
        return (
            <div id = "truthbar"> 
                <div style = {this.state.truthPercent} className = "truthRanking" id = "truth">TRUTH</div>
                <div style = {this.state.falsePercent} className = "truthRanking" id = "false">FALSE</div>
            </div>
        )
  }
}


export default Truthbar;