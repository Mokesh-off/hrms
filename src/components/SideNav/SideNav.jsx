import React, {Component} from 'react';
import './SideNav.css';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
//import LeaveApprovals from './LeaveApproval'

class SideNav extends Component{
constructor(props){
  super(props)
  this.state={
  navFlag:''
 }
 this.navigation=this.navigation.bind(this)
}

navigation(e,link){
  this.setState({navFlag:this.state.navFlag=link})
  console.log(this.state.navFlag)
}

  render(){
   if (this.state.navFlag!=='') 
        return <Redirect to={this.state.navFlag} />;

    return(
      <div className='sidenav'>
        <button>Profile</button>
        <button>Leave</button>
        <button>Leave Request</button>
        {/* <Link to="/leaverequests"><button className="link">Leave Approval</button></Link> */}
        <button className="link" onClick={e=>this.navigation(e,'/leaverequests')}>Leave Approval</button>
        <button>My Leave</button>
        <button>Leave Records</button>
        <button>Leave Policy</button>
        <button>Leave plan</button>
      </div>
    )
  }
}

export default SideNav;