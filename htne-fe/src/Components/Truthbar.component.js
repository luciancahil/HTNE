import React from 'react';

class Truthbar extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            agreePercent: {width: '50%'},
            disagreePercent: {width: '50%'},
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
        let aPercent = this.props.truth * 100;
        
        if(isNaN(aPercent)){
            return;
        }
        let dPercent = 100 - aPercent;

        let aObj = {width: aPercent +"%"}
        let dObj = {width: dPercent + "%"}

        if(this.state.dummy !== aPercent){
            this.setState({
                agreePercent: aObj,
                disagreePercent: dObj,
                dummy: aPercent
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