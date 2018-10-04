import React, { Component } from 'react';
import './Header.css';
import { Link, Redirect } from 'react-router-dom'
class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      logOut: false,
      navFlag: ''
    }
    this.logOutFunction = this.logOutFunction.bind(this)
  }

  logOutFunction () {
    localStorage.removeItem('currentUserId')
    localStorage.removeItem('currentUserName')
    localStorage.removeItem('currentUserRole')
    this.setState({ logOut: (this.state.logOut = true) })
  }

  navigation (e, link) {
    console.log(window.location.pathname, link)
    if (window.location.pathname !== link) {
      console.log('if condition executed')
      this.setState({ navFlag: (this.state.navFlag = link) })
    }
  }

  render () {
    // if (this.state.navFlag != '') {
    //   <Redirect to={this.state.navFlag} />
    //   this.setState({ navFlag: (this.state.navFlag = '') })
    // }
    if (this.state.logOut) {
      // return <Redirect exact strict to='/' />
      window.location.assign('/');
    }
    var userName = JSON.parse(localStorage.getItem('currentUserName'))
    return (
      <div id='header'>
        <div className='logo'>tringapps</div>
        <div className='profile-main-outer'>

          <Link to='/profileIndex' className='profile-outer'>
            <div className='profile-outer'>
              <div className='profile-img' >
                <img src={require('../../Assets/images/profile_icon.png')} />
              </div>
              <div className='profile-name'>{userName}</div>
            </div>
          </Link> 

          <div className='dropdown-content'>
            <span onClick={this.logOutFunction}>Logout</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
