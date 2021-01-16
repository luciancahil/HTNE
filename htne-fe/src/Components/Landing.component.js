import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Form, Button} from 'react-bootstrap';

class Landing extends React.Component {
  render() {
    return(
        <div id = "Landing Page">
            <h1 className = "App-header">Is It Fake News?</h1>
            <Form>
                    <Form.Control id = "url-entry" size="lg" type="text" placeholder="https://zapatopi.net/treeoctopus/sightings.html" />
            </Form>
            <div id = "button-outer">
                <Button id = "submit-button" variant="primary" type="submit">
                    Check!
                </Button>
            </div>
        </div>
    )
  }
}


export default Landing;