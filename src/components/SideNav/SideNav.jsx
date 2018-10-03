import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./SideNav.css";

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navFlag: "",
      employeeVisibility: "",
      showButtons: "sidenavHide",
      cssShape: "triangle-right"
    };
    this.navigation = this.navigation.bind(this);
    this.showButtonsFunction = this.showButtonsFunction.bind(this);
  }
  showButtonsFunction() {
    console.log("showbuttons called");
    if (this.state.showButtons === "sidenavHide") {
      console.log("if condition");
      this.setState({
        showButtons: (this.state.showButtons = "sidenavDisplay sidenav"),
        cssShape: (this.state.cssShape = "triangle-down")
      });
    } else if (this.state.showButtons === "sidenavDisplay sidenav") {
      console.log("else-if condition");
      this.setState({
        showButtons: (this.state.showButtons = "sidenavHide"),
        cssShape: (this.state.cssShape = "triangle-right")
      });
    }
  }

  navigation(e, link) {
    console.log(window.location.pathname, link);
    if (window.location.pathname !== link) {
      console.log("if condition executed");
      this.setState({ navFlag: link });
    }
    console.log("navigation");
  }

  componentWillMount() {
    var visibilityVar = JSON.parse(localStorage.getItem("currentUserRole"));
    visibilityVar === "Employee" &&
      this.setState({
        employeeVisibility: (this.state.employeeVisibility = "employeeCss")
      });
  }

  render() {
    if (this.state.navFlag) {
      return <Redirect to={this.state.navFlag} />;
    }
    return (
      <div className="sidenav">
        <button onClick={e => this.navigation(e, "/dashboard")}>Home</button>
        <button onClick={() => this.showButtonsFunction()}>
          <span className={this.state.cssShape} /> Leave
        </button>
        <div className={this.state.showButtons}>
          <Link to="/leavelist">
            <button className={this.state.employeeVisibility}>
              Leave Approval
            </button>
          </Link>
          <Link to="/leaverequest">
            <button className={this.state.employeeVisibility}>
              {" "}
              Leave Request
            </button>
          </Link>
          <Link to="/MyLeaves">
            <button>My Leave</button>
          </Link>
          <Link to="/leaveRecords">
            <button className={this.state.employeeVisibility}>
              Leave Records
            </button>
          </Link>
          <Link to="/LeavePolicy">
            <button>Leave Policy</button>
          </Link>
          <Link to="/leaveplan">
            <button className={this.state.employeeVisibility}>
              Leave plan
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default SideNav;
