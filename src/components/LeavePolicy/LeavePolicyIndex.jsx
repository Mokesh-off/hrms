import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SideNav from "../SideNav/SideNav";
import LeavePolicy from "./LeavePolicy";

class LeavePolicyIndex extends Component {
  render() {
    return (
      <div>
        <Header />
        <SideNav />
        <LeavePolicy />
        <Footer />
      </div>
    );
  }
}

export default LeavePolicyIndex;
