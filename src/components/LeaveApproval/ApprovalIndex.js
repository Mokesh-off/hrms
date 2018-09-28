import React, { Component } from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SideNav from '../SideNav/SideNav';
import LeaveApproval from './LeaveApproval';

class ApprovalIndex extends Component{
  render(){
    return(
      <div>
        <Header />
        <SideNav />
        <Footer />
        <LeaveApproval/>
      </div>
    )
  }

}

export default ApprovalIndex