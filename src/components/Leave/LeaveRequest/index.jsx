import React, { Component } from 'react';
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import SideNav from '../../SideNav/SideNav';
import LeaveRequest from './LeaveRequest'

class LeaveReq extends Component{
  render(){
    return(
      <div>
        <LeaveRequest/>
      </div>
    )
  }
}

export default LeaveReq