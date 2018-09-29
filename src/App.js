import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import LeaveIndex from "./components/LeaveApproval/leaveIndex";
import LeaveReq from "./components/Leave/LeaveRequest/index";
import LeaveRecordIndex from "./components/LeaveRecord/LeaveRecordIndex";
import HolidayIndex from "./components/Leave/Leaveplan/Index";
import LeavePolicyIndex from "./components/LeavePolicy/LeavePolicyIndex ";
// import Header from "./components/Header/Header";
import ProfileIndex from "./components/Profile/ProfileIndex";
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route exact strict path="/" component={Login} />
              <Route exact strict path="/dashboard" component={Dashboard} />
              <Route
                exact
                strict
                path="/leaverequests"
                component={LeaveIndex}
              />
              <Route exact strict path="/leaverequest" component={LeaveReq} />
              <Route
                exact
                strict
                path="/leaveRecords"
                component={LeaveRecordIndex}
              />
              <Route exact strict path="/leaveplan" component={HolidayIndex} />
              <Route exact strict path="/leavePolicy" component={Dashboard} />
              <Route
                exact
                strict
                path="/profileIndex"
                component={ProfileIndex}
              />

              <Route
                exact
                strict
                path="/leavePolicyIndex"
                component={LeavePolicyIndex}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
