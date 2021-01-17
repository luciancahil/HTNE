import React from 'react';
import ArticleBox from './ArticleBox.component';

class ArticleBoxes extends React.Component {
  render() {

    console.log(this.props.articleTags);
    return (
        <div id = "article boxes">
            <ArticleBox info = {this.props.articleTags[0]}/>
        </div>
    )
  }
}


export default ArticleBoxes;