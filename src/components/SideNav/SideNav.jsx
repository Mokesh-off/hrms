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
  this.navigation=this.navigation.bind(this)
}

navigation(e,Link){  
  this.setState({navFlag:this.state.navFlag=Link})
}

componentWillMount(){
  var visibilityVar= JSON.parse(localStorage.getItem('currentUserRole'));
  (visibilityVar==='Employee')&&
  this.setState({ employeeVisibility: this.state.employeeVisibility='employeeCss'})
  }

  render(){
    if(this.state.navFlag!=''){
      return <Redirect to={this.state.navFlag}/>
    }
    return(
      <div className='sidenav'>
        <button>Home</button>
        <button>Leave</button>
        <Link to='/leaverequest'><button>Leave Request</button></Link>
        <button className={this.state.employeeVisibility}>Leave Approval</button>
        <button>My Leave</button>
        <button className={this.state.employeeVisibility} 
        onClick={e=>this.navigation(e,'/leaveRecords')}>Leave Records</button>
        <button>Leave Policy</button>
        <button className={this.state.employeeVisibility}>Leave plan</button>
      </div>
    )
  }
}

export default SideNav;