import React, { Component } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SideNav from '../SideNav/SideNav'
import PendingLeaves from '../PendingLeaves/PendingLeaves'

class PendingLeavesIndex extends Component {
  render () {
    return (
      <div>
        <Header />
        <SideNav />
        <Footer />
        <PendingLeaves />
      </div>
    )
  }
}

export default PendingLeavesIndex
