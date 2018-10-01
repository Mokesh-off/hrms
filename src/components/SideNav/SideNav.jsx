import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import './SideNav.css';

//import LeaveApprovals from './LeaveApproval'

class SideNav extends Component{
constructor(props){
  super(props)
  this.state={
    navFlag:'',
    employeeVisibility : '',
    showButtons:'sidenavHide',
    cssShape:'triangle-right'
  }
  this.navigation=this.navigation.bind(this)
  this.showButtonsFunction=this.showButtonsFunction.bind(this)
}
showButtonsFunction(){
  console.log('showbuttons called')
  if(this.state.showButtons==='sidenavHide'){
    console.log('if condition')
    return this.setState(
      {showButtons:this.state.showButtons='sidenavDisplay sidenav',
      cssShape:this.state.cssShape='triangle-down'}
      
      )
  }
  else if(this.state.showButtons==='sidenavDisplay sidenav'){
    console.log('else-if condition')
    return this.setState(
      {showButtons:this.state.showButtons='sidenavHide',
      cssShape:this.state.cssShape='triangle-right'}
    )
  }
}
navigation(e,Link){  
  this.setState({navFlag:this.state.navFlag=Link})
}

  // class SideNav extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       navFlag: "",
  //       employeeVisibility: ""
  //     };
  //     this.navigation = this.navigation.bind(this);
  //   }

  componentWillMount() {
    var visibilityVar = JSON.parse(localStorage.getItem("currentUserRole"));
    visibilityVar === "Employee" &&
      this.setState({
        employeeVisibility: (this.state.employeeVisibility = "employeeCss")
      });

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

  render() {
    if (this.state.navFlag) {
      return <Redirect to={this.state.navFlag} />;
    }
    return (
      <div className="sidenav">
        <button onClick={e=>this.navigation(e,'/dashboard')}>Home</button>
        <button onClick={()=>this.showButtonsFunction()}>
        <span className={this.state.cssShape}></span> Leave</button>            
        <div className= {this.state.showButtons} >
          <button onClick={e=>this.navigation(e,'/leavelist')}>Leave Approval</button>
          <button onClick={e=>this.navigation(e,'/leaverequest')}> Leave Request</button>
          <button>My Leave</button>
          <button className={this.state.employeeVisibility} 
            onClick={e=>this.navigation(e,'/leaveRecords')}>Leave Records
          </button>
          <button onClick={this.props.onSubmit} id="LeavePolicy">Leave Policy</button>
          <button 
            className={this.state.employeeVisibility}
            onClick={e => this.navigation(e, "/leavePlan")}>Leave plan
          </button>
        </div>
      </div>
    );
  }
}

export default SideNav;
