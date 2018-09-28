import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./SideNav.css";

//import LeaveApprovals from './LeaveApproval'

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navFlag: "",
      employeeVisibility: ""
    };
    this.navigation = this.navigation.bind(this);
  }

  navigation(e, Link) {
    this.setState({ navFlag: (this.state.navFlag = Link) });
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

    // componentWillMount(){
    //   var visibilityVar= JSON.parse(localStorage.getItem('currentUserRole'));
    //   (visibilityVar==='Employee')&&
    //   this.setState({ employeeVisibility: this.state.employeeVisibility='employeeCss'})

    //   }
  }
  // constructor(props){
  //   super(props)
  //   this.state={
  //   navFlag:'',
  //   employeeVisibility : ''

  //  }
  //  this.navigation=this.navigation.bind(this)
  // }

  navigation(e, link) {
    this.setState({ navFlag: (this.state.navFlag = link) });
    console.log(this.state.navFlag);
    console.log("navigation");
  }

  render() {
    if (this.state.navFlag != "") {
      return <Redirect to={this.state.navFlag} />;
    }
    return (
      <div className="sidenav">
        <button>Home</button>
        <button>Leave</button>
        {/* <Link to="/leaverequests"><button className="link">Leave Approval</button></Link> */}
        <button onClick={e => this.navigation(e, "/leaverequests")}>
          Leave Approval
        </button>
        <button onClick={e => this.navigation(e, "/leaverequest")}>
          {" "}
          Leave Request
        </button>
        <button>My Leave</button>
        <button
          className={this.state.employeeVisibility}
          onClick={e => this.navigation(e, "/leaveRecords")}
        >
          Leave Records
        </button>
        <button onClick={this.props.onSubmit} id="LeavePolicy">
          {" "}
          Leave Policy
        </button>
        <button 
          className={this.state.employeeVisibility}
          onClick={e => this.navigation(e, "/leavePlan")}>Leave plan</button>
      </div>
    );
  }
}

export default SideNav;
