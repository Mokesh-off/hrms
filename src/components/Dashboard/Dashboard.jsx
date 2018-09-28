import React, { Component } from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SideNav from '../SideNav/SideNav';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import LeaveRequests from '../LeaveApproval/LeaveRequests';
// import LeaveApproval from '../LeaveApproval/LeaveApproval';
import PendingLeaves from '../PendingLeaves/PendingLeaves';

class Dashboard extends Component{
  constructor(props){
       super(props)
       this.state={
         role:JSON.parse(localStorage.getItem('currentUserRole'))
      }
  }

  render(){
  
    if(JSON.parse(localStorage.getItem('currentUserId')) === null){
      return <Redirect to='/'/>
    }
    
    if(JSON.parse(localStorage.getItem('currentUserRole')) === "Employer"){
      return (
        
        <div>
           <Header/>
           <Footer/>
           <SideNav/>
          <LeaveRequests/>
        </div>  
      )
    }
else{
      return (
        <div>
           <Header/>
           <Footer/>
           <SideNav/>
          <PendingLeaves/>
    </div>  
  )
}


  }
}

export default Dashboard