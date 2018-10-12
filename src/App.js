import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import MyLeavesIndex from "./components/MyLeaves/MyLeavesIndex";
// import ApprovalIndex from './components/LeaveApproval/ApprovalIndex';
import HolidayIndex from "./components/Leave/Leaveplan/Index";
import SideNav from "./components/SideNav/SideNav";
import LeaveRequest from "./components/Leave/LeaveRequest/LeaveRequest";
import PendingLeaves from "./components/PendingLeaves/PendingLeaves";
import LeaveRequests from "./components/LeaveApproval/LeaveRequests";
import LeavePolicy from "./components/LeavePolicy/LeavePolicy";
import Profile from "./components/Profile/Profile";
import LeaveRecord from "./components/LeaveRecord/LeaveRecord";
import AddUser from "./components/AddUser/AddUser";
import ChangePassword from "./components/ChangePassword/ChangePassword";
import EditProfileApproval from "./components/Profile/EditProfileApproval";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: "false"
    };
    //this.state.authenticated = this.state.authenticated.bind(this)
  }
  componentWillMount() {
    console.log("Component WILL MOUNT!");
  }
  componentDidMount() {
    if (localStorage.getItem("currentUserId")) {
      console.log(this.state.authenticated + "before");
      this.setState({ authenticated: (this.state.authenticated = true) });
      console.log(this.state.authenticated + "after");
    }
    console.log("Component DID MOUNT!");
  }
  componentWillReceiveProps(newProps) {
    console.log("Component WILL RECIEVE PROPS!");
  }
  shouldComponentUpdate(newProps, newState) {
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("Component WILL UPDATE!");
  }

  componentWillUnmount() {
    console.log("Component WILL UNMOUNT!");
  }
  componentDidUpdate() {
    console.log("routing ----------------------");
  }
  render() {
    console.log(this.state.authenticated + "auth");
    return (
      <div>
        <Router>
          <div>
            <SideNav />
            <div>
              <Switch>
                <Route exact strict path="/" component={Login} />
                <Route exact strict path="/dashboard" component={Dashboard} />
                <Route
                  exact
                  strict
                  path="/leavelist"
                  component={LeaveRequests}
                />

                <Route
                  exact
                  strict
                  path="/leaverequest"
                  component={LeaveRequest}
                />

                <Route
                  exact
                  strict
                  path="/myLeaves"
                  component={MyLeavesIndex}
                />

                <Route
                  exact
                  strict
                  path="/pendingleaves"
                  component={PendingLeaves}
                />
                <Route
                  exact
                  strict
                  path="/leaveRecords"
                  component={LeaveRecord}
                />
                <Route
                  exact
                  strict
                  path="/leaveplan"
                  component={HolidayIndex}
                />
                <Route
                  exact
                  strict
                  path="/leavePolicy"
                  component={LeavePolicy}
                />
                <Route exact strict path="/profile" component={Profile} />
                <Route
                  exact
                  strict
                  path="/changepassword"
                  component={ChangePassword}
                />
                <Route exact strict path="/addUser" component={AddUser} />
                <Route
                  exact
                  strict
                  path="/approveProfile"
                  component={EditProfileApproval}
                />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
