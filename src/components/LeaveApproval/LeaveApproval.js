import React,{ Component } from 'react'
import './LeaveApproval.css'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Popup from 'reactjs-popup'
class LeaveApproval extends Component{
   constructor(props){
    super(props)
      this.state={
             open:false,
             status:'',
             LeaveRecord:JSON.parse(localStorage.getItem('Data'))
          }
     }
  closePopup(e){
    this.setState({ open : false });
  }

  changeToReject = (e) => {
    
    let newState = Object.assign({}, this.state);
     console.log(newState);
    let index =localStorage.getItem('currentRequestID');
    newState.LeaveRecord.leaveRequest[index].status = "Rejected";
    localStorage.setItem('Data',JSON.stringify(this.state.LeaveRecord));
    this.setState({ open : true });
    this.setState({ status : 'Rejected' });
      
   }

  change = (e) => {
    let newState = Object.assign({}, this.state);
    console.log(newState);
   let index =localStorage.getItem('currentRequestID');
   newState.LeaveRecord.leaveRequest[index].status = "Approved";
   localStorage.setItem('Data',JSON.stringify(this.state.LeaveRecord));
   this.setState({ open : true });
   this.setState({ status : 'Approved' });
  }



//   changeComment = (e) => {
//     let newState = Object.assign({}, this.state);
//     let index =localStorage.getItem('currentRequestID');
//     newState.LeaveRecord[index].comment = e.target.value;
//     this.setState(newState);
//     localStorage.setItem('Data',JSON.stringify(this.state.DataJSON));
//  }
    render(){
      let index =localStorage.getItem('currentRequestID')
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
                 <td className='tdStyle'>LeaveReason</td>
                 <td className='tdStyle'>&nbsp;</td>
               </tr>
             </thead>
             <tbody>
                <tr>
                 <td className='tdStyle'>{this.state.LeaveRecord.leaveRequest[index].EmpId}</td>
                 <td className='tdStyle'>{this.state.LeaveRecord.leaveRequest[index].LeaveType}</td>
                 <td className='tdStyle'>{this.state.LeaveRecord.leaveRequest[index].FromDate.substr(0,10)}</td>
                 <td className='tdStyle'>{this.state.LeaveRecord.leaveRequest[index].ToDate.substr(0,10)}</td>
                 <td className='tdStyle'>{this.state.LeaveRecord.leaveRequest[index].TotalDays}</td>
                 <td className='tdStyle'>{this.state.LeaveRecord.leaveRequest[index].LeaveReason}</td>
                 <td className='tdStyle'>

                   <button value="Rejected"  onClick={e=>this.changeToReject(e)}>Reject</button><span>&nbsp;</span>
                   <button value="Approved"  onClick={e=>this.change(e)}>Approve</button> 
                   </td>
                 </tr>
             </tbody>
           </table><br></br>
           <NavLink to="/leaverec"><button>Back</button> </NavLink>
           <Popup  open={this.state.open} closeOnDocumentClick  modal>
            <div>   
              <span>{this.state.status} successfully</span><br></br>
               <button className="button" onClick={e=>this.closePopup(e)}>OK</button>
            </div>
          </Popup>  
         </div>
      )
   
   }
}
export default LeaveApproval