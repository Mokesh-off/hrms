import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard';
import LeaveReq from './components/Leave/LeaveRequest/index';
// import LoginContainer from './containers/LoginContainer';

// /home/tringapps/reactApp/hrms/src/components/Login/Login.jsx


class App extends Component {

  render() {
    return (
      <div>
  <Router>
      <div>
        <Route exact strict path="/" component={Login} />
        <Route exact strict path="/dashboard" component = {Dashboard} />
        <Route exact strict path = "/leaverequest" component = {LeaveReq}/>
      </div>
  </Router>
      </div>
    );
  }
}

export default App;
