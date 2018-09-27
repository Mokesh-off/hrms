import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SideNav from "../SideNav/SideNav";
import LeavePolicy from "../LeavePolicy/LeavePolicy";
// import DummyComponent from "./DummyComponent";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  state = {
    clickComponent: null
  };

  onSubmit(e) {
    e.preventDefault();
    console.log(e.currentTarget.id);
    this.setState({ clickComponent: e.currentTarget.id });
  }

  render() {
    if (JSON.parse(localStorage.getItem("currentUserId")) === null) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        {console.log(JSON.parse(localStorage.getItem("currentUserId")))}
        <Header />
        <SideNav onSubmit={this.onSubmit} />
        {this.state.clickComponent !== null ? <LeavePolicy /> : null}
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
