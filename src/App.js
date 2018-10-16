import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'
import MyLeavesIndex from './components/MyLeaves/MyLeavesIndex'
import HolidayIndex from './components/Leave/Leaveplan/Index'
import SideNav from './components/SideNav/SideNav'
import LeaveRequest from './components/Leave/LeaveRequest/LeaveRequest'
import PendingLeaves from './components/PendingLeaves/PendingLeaves'
import LeaveRequests from './components/LeaveApproval/LeaveRequests'
import LeavePolicy from './components/LeavePolicy/LeavePolicy'
import Profile from './components/Profile/Profile'
import LeaveRecord from './components/LeaveRecord/LeaveRecord'
import AddUser from './components/AddUser/AddUser'
import ChangePassword from './components/ChangePassword/ChangePassword'
import EditProfileApproval from './components/Profile/EditProfileApproval'
import NoMatch from './components/NoMatch/NoMatch'
import Calendar from './components/Calendar/Calendar.jsx'

class App extends Component {
  render () {
    return (
      <div>
        <Router>
          <div>
            <SideNav />
            <div>
              <Switch>
                <Route exact strict path='/' component={Login} />
                <Route exact strict path='/dashboard' component={Dashboard} />
                <Route exact strict path='/calendar' component={Calendar} />
                <Route exact strict path='/dashboard/leavelist' component={LeaveRequests} />
                <Route exact strict path='/leaverequest' component={LeaveRequest} />
                <Route exact strict path='/myLeaves' component={MyLeavesIndex} />
                <Route exact strict path='/pendingleaves' component={PendingLeaves} />
                <Route exact strict path='/leaveRecords' component={LeaveRecord} />
                <Route exact strict path='/leaveplan' component={HolidayIndex} />
                <Route exact strict path='/leavePolicy' component={LeavePolicy} />
                <Route exact strict path='/profile' component={Profile} />
                <Route exact strict path='/changepassword' component={ChangePassword} />
                <Route exact strict path='/addUser' component={AddUser} />
                <Route exact strict path='/approveProfile' component={EditProfileApproval} />
                <Route component={NoMatch} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
