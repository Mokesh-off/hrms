import React, { Component } from 'react';
import './Header.css';
class Header extends Component{
  render(){
    return(
      <div id="header">
      {/* <p className="headerText">Tringapps</p> */}
      <span className="logo">tringapps</span>
      <span className="profile">Home</span>
      </div>
        );
    }
}

export default Header;