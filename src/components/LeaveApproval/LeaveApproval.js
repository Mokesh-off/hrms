import React,{ Component } from 'react'
import './LeaveApproval.css'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
class LeaveApproval extends Component{
 constructor(props){
   super(props)
   
  this.state={  
    LeaveDataJSON :JSON.parse(localStorage.getItem('LeaveData'))
  } 
    this.change=this.change.bind(this);
  console.log('state..' + this.state.LeaveDataJSON)

}
  changeToReject = (e) => {
    e.preventDefault();
    let newState = Object.assign({}, this.state);
    let index =localStorage.getItem('currentRequestID');
    newState.LeaveDataJSON[index].status = "Rejected";
    this.setState(newState);
   // this.setState({ status:this.state.status='Rejected'} );
    //console.log( "hi...." + this.state.status)
    localStorage.setItem('LeaveData',JSON.stringify(this.state.LeaveDataJSON));
    
  }

  change = (e) => {
    e.preventDefault();
    let newState = Object.assign({}, this.state);
    let index =localStorage.getItem('currentRequestID');
    newState.LeaveDataJSON[index].status = "Approved";
    this.setState(newState);
    localStorage.setItem('LeaveData',JSON.stringify(this.state.LeaveDataJSON));
    
  }

  changeComment = (e) => {
    let newState = Object.assign({}, this.state);
    let index =localStorage.getItem('currentRequestID');
    newState.LeaveDataJSON[index].comment = e.target.value;
    this.setState(newState);
    localStorage.setItem('LeaveData',JSON.stringify(this.state.LeaveDataJSON));
 }

  // componentWillMount(){
  //   this.setState({LeaveDataJSON:localStorage.getItem('LeaveData')})
  //  }

  // componentWillUpdate(){
    
  //   //localStorage.setItem('LeaveData2',JSON.stringify(this.state.LeaveDataJSON))
  //  //localStorage.setItem('Tesing','testing')
  //  this.setState({LeaveDataJSON:localStorage.getItem('LeaveData')})
  // }

// componentDidMount(){
//   //localStorage.removeItem('LeaveData')
//  // this.setState({status:'rejected'});
//   //localStorage.setItem('LeaveData',JSON.stringify(this.state.LeaveDataJSON))
// }
  
render(){
 // this.setState({LeaveDataJSON:localStorage.getItem('LeaveData')})
      localStorage.setItem('LeaveData',JSON.stringify(this.state.LeaveDataJSON))
      //console.log('before.....'+localStorage.getItem('LeaveData'))
      //console.log("this is state.." + this.state)
     let obj=JSON.parse(localStorage.getItem('LeaveData'))
     console.log(obj);
     let index =localStorage.getItem('currentRequestID');
     console.log(index);
     console.log(obj[index].Name+'.......hello');
    return(
            <div className="main">
             <div className="back">
                 <NavLink to='/dashboard'><button>Back</button></NavLink>
            </div>  
            <div className="container">
            <form>  
             <div className="row">
             <div className="row-1">
                 <label htmlFor="Name">Name</label>
                </div>
               <div className="row-2" >
                {obj[index].Name}
                </div>
             </div>
          
             <div className="row">
               <div className="row-1">
                 <label htmlFor="drop">Type</label>
               </div>
               <div className="row-2">
               {obj[index].LeaveType}
             </div>
             </div>
          
             <div className="row">
               <div className="row-1">
                 <label htmlFor="drop">From Date</label>
               </div>
               <div className="row-2" name="From">
               {obj[index].FromDate}
                </div>
             </div>
          
             <div className="row">
               <div className="row-1">
                 <label htmlFor="drop">To Date</label>
               </div>
               <div className="row-2"  name="To"  >
                  {obj[index].ToDate}
               </div>
            </div>
          
            <div className="row">
              <div className="row-1">
                <label htmlFor="Number_of_Days">Number of Days</label>
              </div>
                <div className="row-2" >
                {obj[index].TotalDays}
                </div>
          </div>
          
              <div className="row">
                <div className="row-1">
                  <label htmlFor="drop">Reason</label>
                </div>
                <div className="row-2" >
                {obj[index].Reason}
                </div>
             </div>
          
            <div className="row" >
               <button value="Rejected" name="status" onClick={e=>this.changeToReject(e)}>Reject</button>
               <button value="Approved" name="status" onClick={e=>this.change(e)}>Approve</button> 
             </div>
            
             <div className="row">
                <div className="row-1">
                  <label htmlFor="drop">Comment</label>
                </div> 
                <div className="row-2" >
                <input type="text" name="comment" onChange={e=>this.changeComment(e)}
                  value={obj[index].comment}/>
                </div>
             </div>



           </form>
           </div>
           </div>

        )
    }
}

export default LeaveApproval