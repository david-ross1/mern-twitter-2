import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  getLinks() {
      if (this.props.loggedIn) {
        return (
          <div className="NavBar">
            <div className="tweet-links">
              <div className='t-link'>
                <Link className='link' to={'/tweets'}>All Tweets</Link> 
                <Link className='link' to={'/profile'}>Profile</Link>
                <Link  className='link' to={'/new_tweet'}>Write a Tweet</Link>
                <div className='logout-button'><button className='logout' onClick={this.logoutUser}>Logout</button></div>
              </div>
            </div>
            </div>
        );
      } else {
        return (
          <div className='session-container'> 
            <div className="NavBar Links2">
                <button className='session-button'> <Link className='link' to={'/signup'}>Signup</Link> </button>
                <button className='session-button'><Link className='link' to={'/login'}>Login</Link></button>
            </div>
          </div>
        );
      }
  }

  render() {
      return (
        <div className="logotainer"> 
          <div className='chirper'>
            <h1>Chirper</h1>
            { this.getLinks() }
          </div>
        </div>
      );
  }
}

export default NavBar;