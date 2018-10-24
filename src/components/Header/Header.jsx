import React, { Component } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      logOut: false,
      display:'hide'
    }
    this.logOutFunction = this.logOutFunction.bind(this)
    this.display=this.display.bind(this)
  }

  logOutFunction () {
    window.localStorage.removeItem('currentUserId')
    window.localStorage.removeItem('currentUserName')
    window.localStorage.removeItem('currentUserRole')
    this.setState({ logOut: (this.state.logOut = true) })
  }
  display(){
    console.log('display functions')
    if(this.state.display === 'hide')
    this.setState({display : this.state.display='display'})
    else
    this.setState({display : this.state.display='hide'})
  }

  render () {
    if (this.state.logOut) {
      window.location.assign('/')
    }
    var userName = JSON.parse(window.localStorage.getItem('currentUserName'))
    
    return (
      <div id='headerContainer'>
        <div className='header'>
          <div className='logo'>HRMS.</div>
          <div className='profile-main-outer'>
              <div className='profile-outer'>
                <Link to='/profile' className='profile-outer'>
                <div className='profile-img'>
                  <img src={require('../../Assets/images/profile_icon.png')} />
                </div>
                </Link>
                {/* <div className='profile-name'>{userName}</div> */}
                <div id='downArrow' onClick={this.display}><i class="fa fa-angle-down"></i></div>
              </div>
           
          </div>
        </div>
        
        <div className= {this.state.display} id='dropdown-content'>
          <div>
            <Link to='/changepassword' className='changePass'> Change Password</Link>
          </div>
          <div id='divider'/>
          <input type='button' className='logoutbutton' onClick={this.logOutFunction} value='Logout' />
        </div>

      </div>
    )
  }
}

export default Header
