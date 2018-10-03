import React, { Component } from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import SideNav from '../../SideNav/SideNav'
import LeaveRequest from './LeaveRequest'

class LeaveReq extends Component {
  render () {
    return (
      <div>
        <Header />
        <SideNav />
        <LeaveRequest />
        <Footer />
      </div>
    )
  }
}

export default LeaveReq
