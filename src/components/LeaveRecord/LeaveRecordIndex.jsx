import React, {Component} from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SideNav from '../SideNav/SideNav';
import LeaveRecord from './LeaveRecord'
class LeaveRecordIndex extends Component{
  render(){
    return(
        <div>
        <Header />
        <SideNav />    
        <Footer />
        <LeaveRecord />
        </div>
        )
  }
}
export default LeaveRecordIndex;