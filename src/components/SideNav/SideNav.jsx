import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import './SideNav.css';

class SideNav extends Component{
constructor(props){
  super(props)
  this.state={
    navFlag:'',
    employeeVisibility : ''
  }
}
navigation (e, link) {
  this.setState({ navFlag: this.state.navFlag = link})
}

componentWillMount(){
  var visibilityVar= JSON.parse(localStorage.getItem('currentUserRole'));
  (visibilityVar==='Employee')&&
  this.setState({ employeeVisibility: this.state.employeeVisibility='employeeCss'})
  }
  render(){
    if (this.state.navFlag != '')
      return <Redirect to = {this.state.navFlag} />
    return(
      <div className='sidenav'>
        <button>Home</button>
        <button>Leave</button>
        <button onClick ={e => this.navigation(e,'/leaverequest')}>Leave Request</button>
        <button className={this.state.employeeVisibility}>Leave Approval</button>
        <button>My Leave</button>
        <button className={this.state.employeeVisibility}>Leave Records</button>
        <button>Leave Policy</button>
        <button className={this.state.employeeVisibility} 
        onClick ={e => this.navigation(e,'/leaveplan')}>Leave plan</button>
      </div>
    )
  }
}

export default SideNav;