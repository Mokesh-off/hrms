import React, { Component } from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SideNav from '../SideNav/SideNav';
import PendingLeaves from '../PendingLeaves/PendingLeaves';
class EmployeeDashboard extends Component{
  constructor(props){
       super(props)
       this.state={
         role:JSON.parse(localStorage.getItem('currentUserRole'))
      }
  }

  render(){
   return(   
      <div>
        <Header/>
        <Footer/>
        <SideNav/>
        <PendingLeaves/>
      </div>
     ) 
    }
  
}

export default EmployeeDashboard