import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard';
import LeaveIndex from './components/LeaveApproval/leaveIndex';
import MyLeavesIndex from './components/MyLeaves/MyLeavesIndex';
import ApprovalIndex from './components/LeaveApproval/ApprovalIndex';
import PendingLeavesIndex from './components/PendingLeaves/PendingLeavesIndex';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import LeaveReq from './components/Leave/LeaveRequest/index';
import LeaveRecordIndex from './components/LeaveRecord/LeaveRecordIndex'

class App extends Component {

  render() {
    return (
      <div>
  <Router>
      <div>
        <Route exact strict path="/" component={Login} />
        <Route exact strict path="/dashboard" component={Dashboard} />
        <Route exact strict path="/leaverec" component={LeaveIndex} />
        <Route exact strict path = "/leaverequest" component = {LeaveReq}/>
        <Route exact strict path="/myLeaves" component={MyLeavesIndex} />
        <Route exact strict path="/approvals" component={ApprovalIndex} />
        <Route exact strict path="/pendingleaves" component={PendingLeavesIndex} />
        <Route exact strict path ="/leaveRecords" component={LeaveRecordIndex} />
      </div>
  </Router>
 </div>
    );
  }
}

export default App;
