import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SideNav from "../SideNav/SideNav";
import Profile from "../Profile/Profile";

class ProfileIndex extends Component {
  render() {
    return (
      <div>
        <Header />
        <SideNav />
        <Profile />
        <Footer />
      </div>
    );
  }
}

export default ProfileIndex;
