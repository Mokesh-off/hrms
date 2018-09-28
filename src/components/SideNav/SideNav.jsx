import React, {Component} from 'react';
import './SideNav.css';
import { BrowserRouter as Router, Route, Redirect,Link} from "react-router-dom";
//import LeaveApprovals from './LeaveApproval'
import Popup from 'reactjs-popup'
class SideNav extends Component{
constructor(props){
  super(props)
  this.state={
  navFlag:'',
  employeeVisibility : ''

 }
 this.navigation=this.navigation.bind(this)
}

navigation(e,link){
  console.log(window.location.pathname, link)
  if (window.location.pathname !== link) {
    console.log('if condition executed')
    this.setState({navFlag: link})
  } 
  console.log('navigation')
}
  
componentWillMount(){
  var visibilityVar= JSON.parse(localStorage.getItem('currentUserRole'));
  (visibilityVar==='Employee')&&
  this.setState({ employeeVisibility: this.state.employeeVisibility='employeeCss'})
  //this.setState({navFlag:this.state.navFlag=''})
  }

  render(){
   if (this.state.navFlag) 
   {
        return <Redirect to={this.state.navFlag} />;
   }

    return(
      <div className='sidenav'>
        <button onClick={e=>this.navigation(e,'/dashboard')}>Home</button>
        <button>Leave</button>
        <button>Leave Request</button>
        {/* <Link to="/leaverequests"><button className="link">Leave Approval</button></Link> */}
        <button onClick={e=>this.navigation(e,'/leaverec')}>Leave Approval</button>
        <Link to='/leaverequest'><button>Leave Request</button></Link>
        <button onClick={e=>this.navigation(e,'/myLeaves')}>My Leave</button>
        <button className={this.state.employeeVisibility}>Leave Records</button>
        <button>Leave Policy</button>
        <button className={this.state.employeeVisibility}>Leave plan</button>
        <button onClick={e=>this.navigation(e,'/pendingleaves')}>Pending Leave </button>
      </div>
    )
  }
}

export default SideNav;