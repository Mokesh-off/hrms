import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard';

// /home/tringapps/reactApp/hrms/src/components/Login/Login.jsx
class App extends Component {
  render() {
    return (
      <div>
  <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
      </div>
  </Router>
      </div>
    );
  }
}

export default App;
