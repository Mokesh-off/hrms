import React, { Component } from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SideNav from '../SideNav/SideNav';
import { Redirect } from 'react-router-dom';


class Dashboard extends Component{

  render(){
    if(JSON.parse(localStorage.getItem('currentUserId')) === null){
      return <Redirect to='/' />
    }
    return(

      <div>
        {console.log(JSON.parse(localStorage.getItem('currentUserId')))}
        <Header />
        <SideNav />    
        <Footer />
      </div>
    )
  }

}

export default Dashboard