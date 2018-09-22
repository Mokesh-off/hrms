import React, {Component} from 'react';
import './SideNav.css';

class SideNav extends Component{

  render(){
    return(
      <div className='sidenav'>
        <button>Profile</button>
        <button>Leave</button>
        <button>Leave Request</button>
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