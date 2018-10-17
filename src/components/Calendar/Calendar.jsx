import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment'
import Popup from 'reactjs-popup'
import FullCalendar from 'fullcalendar-reactwrapper';
import '../../../node_modules/fullcalendar-reactwrapper/dist/css/fullcalendar.min.css'
import './Calendar.css'
import LeaveRequests from '../LeaveApproval/LeaveRequests.js'

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    display:'none',
    empName:'',
    fromDate:'',
    toDate:'',
    noOfDays:'',
    reason:'',
    status:'',
    left:'',
    top:'',
    calendarData:[]		
    }
  }

  calendarData(){
    var calendarData=JSON.parse(localStorage.getItem('Data'))
    calendarData=calendarData.leaveRequest
    var j=0,obj

    calendarData.forEach(i => {

      if(i.status === 'Rejected'){
        
      }
        var endDate=new Date((i.ToDate).split("T")[0])
        endDate=endDate.setDate(endDate.getDate()+1)
        endDate=new Date(endDate)
        endDate=JSON.stringify(endDate).substr(1,10)

        obj = Object.assign ( {}, {title:i.EmpName,
         EmpId:i.EmpId, empName:i.EmpName,
         fromDate:(i.FromDate).split("T")[0],toDate:(i.ToDate).split("T")[0],
         noOfDays:i.TotalDays,className:i.status,
         reason:i.LeaveReason,status:i.status,
         start:(i.FromDate).split("T")[0], end:endDate}
         
         )
        this.state.calendarData[this.state.calendarData.length]= obj
        j++
    });

  }

  popUpFunction(e,event){
    
    
    this.setState({

      display : 'block',
      empName:e.empName,
      fromDate:e.fromDate,
      toDate:e.toDate,
      noOfDays:e.noOfDays,
      reason:e.reason,
      status:e.status,
      left:event.pageX,
      top:event.pageY
    })

  }
  closePopUp(event){
    console.log('close pop up')
    this.setState({
      display:'none'
    })
  }
  render() {
    if((this.state.calendarData).length===0)
    this.calendarData();
    return (
      <div id='fullCalendarMainContainer'>
        <div id='fullCalendarContainer'>
          <div id="example-component">
            <FullCalendar
                id = "calendar"
            header = {{
                left: 'prev,next today myCustomButton',
                center: 'title',
                right: 'month,basicWeek,basicDay'
            }}
            defaultDate= {moment()}
            navLinks= {true} // can click day/week names to navigate views
            editable= {true}
            eventLimit= {true} 
            events = {this.state.calendarData}	
            eventClick={(e,event)=>this.popUpFunction(e,event)}
            // eventMouseout={()=>this.closePopUp()}
        />
          </div>
          <div className='fc-popover fc-more-popover popUp' 
          style= {{display:this.state.display,top:this.state.top,left:this.state.left}}
          >
          <span className='marginLeft' onClick={()=>this.closePopUp()}>X</span>
              <div>Name : {this.state.empName}</div>
              <div>From Date : {this.state.fromDate}</div>
              <div>To Date : {this.state.toDate}</div>
              <div>Total Days : {this.state.noOfDays}</div>
              <div>Reason : {this.state.reason}</div>
              <div>Status : {this.state.status}</div>
              {/* <button onClick={()=>this.closePopUp()}>close</button> */}
              {(this.state.status==='Approved')?
              <button>Reject</button>
              :(this.state.status==='Rejected')?
              <button>Approve</button>
              :
              <div>
              <button onClick={e=>this.changeToApprove(e)}>Approve</button>
              <button>Reject</button>
              </div>
              }
          </div>
        </div>
      </div>
    );
  }
}
export default Calendar