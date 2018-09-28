import React, { Component } from 'react';
//import './LeaveRequests.css';
//import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
//import LeaveApprovals from './LeaveApproval'

class MyLeaves extends Component {
  constructor(props){
    super(props);
    this.state ={
    LeaveRecord : JSON.parse(localStorage.getItem('Data'))
    }
}


  render() {
    let id=JSON.parse(localStorage.getItem('currentUserId'))
    //alert(id);
    return(
      
      <div className='leaveRecord'>
        <table>
           <thead className='thead1'>
             <tr className='thead1'>
               <td className='tdStyle'>EmpId</td>
               <td className='tdStyle'>LeaveType</td>
               <td className='tdStyle'>FromDate</td>
               <td className='tdStyle'>ToDate</td>
               <td className='tdStyle'>TotalDays</td>
               <td className='tdStyle'>status</td>
               <td className='tdStyle'>LeaveReason</td>
             </tr>
           </thead>
           <tbody>
           {
               this.state.LeaveRecord.leaveRequest.map((record,i) =>
               (record.EmpId===id)?
               <tr key={record[i]} className='tdStyle'  >
               
                 <td className='tdStyle'>{record.EmpId}</td>
                 <td className='tdStyle'>{record.LeaveType}</td>
                 <td className='tdStyle'>{record.FromDate.substr(0,10)}</td>
                 <td className='tdStyle'>{record.ToDate.substr(0,10)}</td>
                 <td className='tdStyle'>{record.TotalDays}</td>
                 <td className='tdStyle'>{record.status}</td>
                 <td className='tdStyle'>{record.LeaveReason}</td>
                 
               </tr>
               :
               <tr key={record[i]} className='tdStyle'  >
               
               <td className='tdStyle'>&nbsp;</td>
               <td className='tdStyle'>&nbsp;</td>
               <td className='tdStyle'>&nbsp;</td>
               <td className='tdStyle'>&nbsp;</td>
               <td className='tdStyle'>&nbsp;</td>
               <td className='tdStyle'>&nbsp;</td>
               <td className='tdStyle'>&nbsp;</td>
               
             </tr>
                



             )
             }
           </tbody>
         </table>
       </div>
    )
 
  }
}

export default MyLeaves ;
