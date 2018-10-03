import React, { Component } from 'react'

import { BrowserRouter as Redirect } from 'react-router-dom';
import LeaveRequests from '../LeaveApproval/LeaveRequests'

import PendingLeaves from '../PendingLeaves/PendingLeaves'

class Dashboard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      role: JSON.parse(localStorage.getItem('currentUserRole'))
    }
  }

  render () {
    if (JSON.parse(localStorage.getItem('currentUserId')) === null) {
      return <Redirect to='/' />
    }

    if (JSON.parse(localStorage.getItem('currentUserRole')) === 'Employer') {
      return (
        <div>
          <LeaveRequests />
        </div>
      )
    } else {
      return (
        <div>
          <PendingLeaves />
        </div>
      )
    }
  }
}

export default Dashboard
