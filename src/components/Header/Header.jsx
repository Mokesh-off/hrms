import React, { Component } from 'react';
import './Header.css';
import { Redirect } from 'react-router-dom';
class Header extends Component{
  constructor(props){
    super(props)
    this.state={
      logOut : false
    }
    this.logOutFunction = this.logOutFunction.bind(this);
  }
  logOutFunction(){
    localStorage.removeItem('currentUserId');
    localStorage.removeItem('currentUserName');
    localStorage.removeItem('currentUserRole');
    this.setState({logOut:this.state.logOut=true})
    console.log('logout function');
  }
  render(){
    if(this.state.logOut){
      return <Redirect to='/' />
    }
    var userName= JSON.parse(localStorage.getItem('currentUserName'))
    return(
      <div id="header">
        <div className="logo">tringapps</div>
        <div className='profile-main-outer'>
          <div className='profile-outer'>
            <div className='profile-img'>
              <img src={require("../../Assets/images/profile_icon.png")}></img>
            </div>
            <div className='profile-name'>{userName}</div>
          </div>
          <div className="dropdown-content">
            <span onClick={this.logOutFunction}>Logout</span>
          </div>
        </div>
      </div>
        );
    }
}

export default Header;