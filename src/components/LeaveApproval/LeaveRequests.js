import React, { Component } from 'react';
import './LeaveRequests.css';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import LeaveApprovals from './LeaveApproval'

class LeaveRequests extends Component {
  state={
    currentRequestID:''
  }

    sendReqId(e,i){
         localStorage.setItem('currentRequestID',i)
    }
  
     render() {
          //  // localStorage.setItem('LeaveData',JSON.stringify(this.state))
            console.log('From Leave Req...'+localStorage.getItem('LeaveData'))
           let obj=JSON.parse(localStorage.getItem('LeaveData'))
            console.log('obj.....' + obj)
            var req=obj;
    return (
      <div>  
      <div>
     <Router>
       <div>
          <div className="tab">
              {req.map((req,i)=><ul key={i}>
              <li> {req.EmpId} {req.Name} {req.LeaveType}<NavLink to="/approvals">
                 <button  onClick={e=>this.sendReqId(e,i)}>view</button>
              </NavLink></li><hr></hr>
          </ul>)}
      </div>
      <Route exact path="/approvals" component={LeaveApprovals} />
    </div>
  </Router>    
  </div>
    <div className="back">
    <NavLink to='/dashboard'><button>Back</button></NavLink>
</div>  
</div>  
  
    );
  }
}

export default LeaveRequests ;
