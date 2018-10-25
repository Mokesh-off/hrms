import React, { Component } from 'react'
import './Dashboard.css'
import AvailableLeaves from './AvailableLeaves'
import LeaveRequests from '../LeaveApproval/LeaveRequests'

class Dashboard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      role: JSON.parse(localStorage.getItem('currentUserRole'))
    }
  }
  employerCard () {
    window.location.assign('/dashboard/leavelist')
  }
  employeeCard () {
    window.location.assign('/pendingleaves')
  }
  componentDidMount () {
    
  }
  render () {
    if (!window.localStorage.getItem('currentUserId')) {
      return window.location.replace('/')
    } else {
      var DataVar=JSON.parse(localStorage.getItem('Data'))
      var leaveRequestCount=0;
      DataVar.leaveRequest.map((data,i) => {
        if(data.status === 'Pending'){
          leaveRequestCount++;
        }
      });

      if (JSON.parse(localStorage.getItem('currentUserRole')) === 'Employer') {
        return (
          <div id='componentContainer'>
            <LeaveRequests />
            <AvailableLeaves />
          </div>
        )
      } else {
        return (
          <div id='componentContainer'>
            <h1>Dashboard</h1>
            <AvailableLeaves />
          </div>
        )
      }
    }
  }
}

export default Dashboard
