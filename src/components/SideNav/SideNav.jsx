import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css';

class SideNav extends Component{
constructor(props){
  super(props)
  this.state={
    employeeVisibility : ''
  }
}

componentWillMount(){
  var visibilityVar= JSON.parse(localStorage.getItem('currentUserRole'));
  (visibilityVar==='Employee')&&
  this.setState({ employeeVisibility: this.state.employeeVisibility='employeeCss'})
  }

  render(){
    return(
      <div className='sidenav'>
        <button>Home</button>
        <button>Leave</button>
        <Link to='/leaverequest'><button>Leave Request</button></Link>
        <button className={this.state.employeeVisibility}>Leave Approval</button>
        <button>My Leave</button>
        <button className={this.state.employeeVisibility}>Leave Records</button>
        <button>Leave Policy</button>
        <button className={this.state.employeeVisibility}>Leave plan</button>
      </div>
    )
  }
}

export default SideNav;