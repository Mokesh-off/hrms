import React, { Component } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      logOut: false
    }
    this.logOutFunction = this.logOutFunction.bind(this)
  }

  logOutFunction () {
    window.localStorage.removeItem('currentUserId')
    window.localStorage.removeItem('currentUserName')
    window.localStorage.removeItem('currentUserRole')
    this.setState({ logOut: (this.state.logOut = true) })
  }

  render () {
    if (this.state.logOut) {
      window.location.assign('/')
    }
    var userName = JSON.parse(window.localStorage.getItem('currentUserName'))
    return (
      <div id='header'>
        <div className='logo'>tringapps</div>
        <div className='profile-main-outer'>
          <Link to='/profile' className='profile-outer'>
            <div className='profile-outer'>
              <div className='profile-img'>
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
