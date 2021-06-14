import React from 'react';
import './tweet.css'

class TweetBox extends React.Component {
  render() {
    return (
        <div className='tweet-text'>
            <h3>{this.props.text}</h3>
        </div>
    );
  }
}

export default TweetBox;
