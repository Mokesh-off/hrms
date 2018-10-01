import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SideNav from "../SideNav/SideNav";
import LeavePolicy from "./LeavePolicy";
// import "./LeavePolicy.css";

class LeavePolicyIndex extends Component {
  render() {
    return (
      <div>
        <LeavePolicy />
      </div>
    );
  }
}

export default LeavePolicyIndex;
