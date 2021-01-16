import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Form, Button} from 'react-bootstrap';

class Landing extends React.Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onURLChange = this.onURLChange.bind(this);
        
        this.state = {
            url: ""
        }
    }

    onURLChange(e){
        e.preventDefault();
        this.setState({
            url: e.target.value
        })
        
    }

    onSubmit(e){
        e.preventDefault();
        alert(this.state.url);
    }
  render() {
    return(
        <div id = "Landing Page">
            <h1 className = "App-header">Is It Fake News?</h1>
            <Form>
                    <Form.Control id = "url-entry" size="lg" type="text" placeholder="https://zapatopi.net/treeoctopus/sightings.html" onChange = {this.onURLChange} />
            </Form>
            <div id = "button-outer">
                <Button id = "submit-button" variant="primary" type="submit" onClick = {this.onSubmit}>
                    Check!
                </Button>
            </div>
        </div>
    )
  }
}


export default Landing;