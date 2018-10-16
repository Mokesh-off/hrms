import React, { Component } from 'react';
import './Dashboard.css';
import AvailableLeaves from './AvailableLeaves';

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
  render () {
    if(!localStorage.getItem('currentUserId'))
    {
    return(
     window.location.replace('/')
    )
    }
    else{

      var leaveRequestCount = JSON.parse(localStorage.getItem('Data'))
      // leaveRequestCount = leaveRequestCount.leaveRequest.length - leaveRequestCount.deletedRow.length
      leaveRequestCount = leaveRequestCount.leaveRequest.length
      if (JSON.parse(localStorage.getItem('currentUserRole')) === 'Employer') {
        return (
          <div className='dashboardRightComponent'>
            <h1>Dashboard</h1>
            <div className='divider' />

            <div className='cardOuter'>
              <div className='cardContainer'>
                <div className='icon'>
                  <i className='fa fa-info fa-4x' aria-hidden='true' />
                </div>
                <div className='right'>
                  <div className='icon-count'>{leaveRequestCount}</div>
                  <div className='icon-text'>Leave requests</div>
                </div>
              </div>

              <div className='viewDetails cursor' onClick={this.employerCard}>
                <div>view details</div>
                <div>
                  <i class='fa fa-arrow-circle-right' />
                </div>
              </div>
            </div>

            <div />
            <AvailableLeaves />
          </div>
        )
      } else {
        return (
          <div className='dashboardRightComponent'>
            <h1>Dashboard</h1>
            <div className='divider' />
            <AvailableLeaves />
          </div>
        )
      }
    }
  }
}

export default Dashboard
