import React, { Component } from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SideNav from '../SideNav/SideNav';

class Dashboard extends Component{
  render(){
    return(
      <div>
        <Header />
        <SideNav />
        <Footer />
      </div>
    )
  }

}

export default Dashboard