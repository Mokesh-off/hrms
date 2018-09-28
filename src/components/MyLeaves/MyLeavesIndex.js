import React, { Component } from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SideNav from '../SideNav/SideNav';
import MyLeaves from '../MyLeaves/MyLeaves';
import './MyLeaves.css'
class MyLeavesIndex extends Component{
  render(){
    return(
      <div>
        <Header />
        <SideNav />
        <Footer />
        <MyLeaves/>
      </div>
    )
  }

}

export default MyLeavesIndex