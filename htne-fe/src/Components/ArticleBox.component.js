import React from 'react';

class ArticleBox extends React.Component {
  render() {
    console.log(this.props.info);

    return (
        <div className = "ArticleBox">
            <h2 className = "App-header">{this.props.info.what}</h2>
            <div id = "subtext">
                <p className = "Box-text">
                    Who: {this.props.info.who}
                </p>
                <p className = "Box-text">
                    When: {this.props.info.when}
                </p>
                <p className = "Box-text">
                    Rating: {this.props.info["fact-check"]}
                </p>
            </div>
        </div>
    )
  }
}


export default ArticleBox;