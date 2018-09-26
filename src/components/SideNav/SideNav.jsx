import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css';

class SideNav extends Component{
  // leavereq(){
  //   console.log("LeaveRequest");
  //  return <Redirect to='/leaverequest' />
  // }

  render(){
    return(
      <div className='sidenav'>
        <button>Profile</button>
        <button>Leave</button>
        <Link to='/leaverequest'><button>Leave Request</button></Link>
        <button>Leave Approval</button>
        <button>My Leave</button>
        <button>Leave Records</button>
        <button>Leave Policy</button>
        <button>Leave plan</button>
      </div>
    )
  }
}

export default SideNav;