import React from 'react';
import {Container} from 'react-bootstrap';

class Truthbar extends React.Component {
<<<<<<< HEAD:htne-fe/src/Components/Truthbar.js
    
    state = {
        truthPercent: {width: '50%'},
        falsePercent: {width: '50%'},
        dummy: -1
=======
    constructor(props){
        super(props);

        this.state = {
            agreePercent: {width: '50%'},
            disagreePercent: {width: '50%'},
            dummy: -1
        }

        this.setPercent = this.setPercent.bind(this); 
        console.log(this.state.truthPercent);
>>>>>>> 6409708cc516f1039304858e45b4683ea44f66c4:htne-fe/src/Components/Truthbar.component.js
    }

    componentDidUpdate = () => {
        this.setPercent();
    }


<<<<<<< HEAD:htne-fe/src/Components/Truthbar.js
    setPercent = () => {
        let tPercent = this.props.truth * 100;
=======
    setPercent(){
        let aPercent = this.props.truth * 100;
>>>>>>> 6409708cc516f1039304858e45b4683ea44f66c4:htne-fe/src/Components/Truthbar.component.js
        
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
    
        return (
            <Container>
            <div id = "truthbar"> 
                <div style = {this.state.truthPercent} className = "truthRanking" id = "truth">AGREE</div>
                <div style = {this.state.falsePercent} className = "truthRanking" id = "false">DISAGREE</div>
            </div>
            </Container>
        )
  }
}


export default Truthbar;
