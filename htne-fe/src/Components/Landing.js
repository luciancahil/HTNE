import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Form, Button, Container, Col} from 'react-bootstrap';
import axios from 'axios';
import Data from './Data'
import data from './data.json'



class Landing extends React.Component {
    state = {
        url: "",
        data: 'none',
        score: 0,
        percentage: 0
    }

    onURLChange = (e) => {
        e.preventDefault();
        this.setState({
            url: e.target.value
        })
        
    }

    calcScore = () => {
        let newScore = 0;
        console.log(this.state.data);
        let ratings = this.state.data.map(point => point.fact_check);
        console.log(ratings);
    
        for(let i = 0; i < ratings.length; i++) {
    
          let rating = ratings[i];
    
          if(rating === "true"){
            newScore += 1;
          }else if(rating === "mostly-true"){
            newScore += 4/5;
          }else if(rating === "half-true"){
            newScore += 3/5;
          }else if(rating === "barely-true"){
            newScore += 2/5;
          }else if(rating === "false"){
            newScore += 1/5;
          }else if(rating === "pants-fire" || rating === "ling_pof"){
            newScore += 0;
          }
        }

        this.setState({
            score: newScore,
            percentage: (newScore/ratings.length)
        })
    }

    onSubmit = e => {
        this.setState({
            data: 'none'
        })
        e.preventDefault();
        let url = "http://localhost:5000/api/scrape/";
        axios.get(url + this.state.url)
        .then(res => {
            this.setState({
                data: res.data
            })
            console.log(res.data);
            this.calcScore();
            console.log(this.state.score);
        })
        
        
        //.then(result => this.props.setData(result))
        
    }


  render() {

      let data;
      let scores;
      let perc;
      if (this.state.data !== 'none') {
        data = <Data data={this.state.data} score={this.state.score} entries={this.state.data.length}/>
        scores = <h2 className = "App-header">Score: {this.state.score} </h2>
        perc = <h2 className = "App-header">Truth Percentage: {this.state.percentage}</h2>
      }
    return(
        <Container>
            <Col>
            <h1 className = "App-header">Is It Fake News?</h1>
            <Form>
                    <Form.Control id = "url-entry" size="lg" type="text" method="post" placeholder="https://zapatopi.net/treeoctopus/sightings.html" onChange={this.onURLChange} />
            </Form>
            <div id = "button-outer">
                <Button id = "submit-button" variant="primary" type="submit" onClick={this.onSubmit}>
                    Check!
                </Button>
            </div>
            {data}
            {scores}
            {perc}
            </Col>
        </Container>
    )
  }
}


export default Landing;
