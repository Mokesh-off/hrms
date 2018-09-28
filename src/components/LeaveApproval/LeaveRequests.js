import React, { Component } from 'react';
import './LeaveRequests.css';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import LeaveApprovals from './LeaveApproval'

class LeaveRequests extends Component {
  constructor(props){
    super(props)
      this.state={
             currentRequestID:'',
             LeaveRecord:JSON.parse(localStorage.getItem('Data'))
          }
  }
    sendReqId(e,i){
      //alert(i)
         localStorage.setItem('currentRequestID',i)
    }
  
    render(){
      // {console.log(this.state.LeaveRecord.leaveRequest)}
     return(
        
       <div className='leaveRecord'>
         <table>
            <thead className='thead1'>
              <tr className='thead1'>
                <td className='tdStyle'>EmpId</td>
                <td className='tdStyle'>LeaveType</td>
                <td className='tdStyle'>&nbsp;</td>
              </tr>
            </thead>
            <tbody>
            {
                this.state.LeaveRecord.leaveRequest.map((record,i) =>
                
                <tr key={i} className='tdStyle'  >
                
                  <td className='tdStyle'>{record.EmpId}</td>
                  <td className='tdStyle'>{record.LeaveType}</td>
                  <td className='tdStyle'><NavLink to="/approvals">
                  <button  onClick={e=>this.sendReqId(e,i)} >View</button>
                  </NavLink></td>
                </tr>
                
              )
              }
            </tbody>
          </table>
        </div>
     )
   }
  
}

export default LeaveRequests ;
