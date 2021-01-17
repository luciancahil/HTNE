import React from 'react';
import ArticleBox from './ArticleBox.component';

class ArticleBoxes extends React.Component {


    //renderBoxed = (who, when, fact-check) => <ArticleBox who = {who} when = {when} fact-check = {fact-check}/>


    render() {

    console.log(this.props.articleTags);
    return (
        <div id = "article boxes">
            {this.props.articleTags.map(stuff => <ArticleBox info = {stuff}/>)}
        </div>
    )
  }
}


export default ArticleBoxes;