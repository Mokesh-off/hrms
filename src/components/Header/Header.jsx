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
        <span className="logo">tringapps</span>
        <div className='profile-icon'>
        <span className="profile">
        {userName}
        </span>
        <div className="dropdown-content">
          <span onClick={this.logOutFunction}>Logout</span>
        </div>
        </div>
      </div>
        );
    }
}

export default Header;