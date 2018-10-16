// import React...
import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment'
 
// ... and fullcalendar-reactwrapper.
import FullCalendar from 'fullcalendar-reactwrapper';
import '../../../node_modules/fullcalendar-reactwrapper/dist/css/fullcalendar.min.css'
// fullcalendar-reactwrapper/dist/css/fullcalendar.min.css
import './Calendar.css'
class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    calendarData:[],		
    }
    this.calendarData=this.calendarData.bind(this)
  }

  calendarData(){
    var calendarData=JSON.parse(localStorage.getItem('Data'))
    calendarData=calendarData.leaveRequest
    var j=0
    console.log(calendarData)
    calendarData.forEach(i => {
      if(i.status === 'Approved'){
        var obj = Object.assign ( {}, {title:i.EmpName,
         EmpId:i.EmpId, EmpName:i.EmpName,
         start:(i.FromDate).split("T")[0], end:(i.ToDate).split("T")[0]})
        this.state.calendarData[this.state.calendarData.length]= obj
        j++
      }
    });
    console.log('state calendar: '+JSON.stringify(this.state.calendarData))
    return this.state.calendarData
  }

  componentDidMount(){
    console.log('did mount')
    this.calendarData();
    console.log('state did mount calendar: '+JSON.stringify(this.state.calendarData))
  }
  render() {

    return (
      <div id='fullCalendarMainContainer'>
        <div id='fullCalendarContainer'>
          <div id="example-component">
            <FullCalendar
                id = "your-custom-ID"
            header = {{
                left: 'prev,next today myCustomButton',
                center: 'title',
                right: 'month,basicWeek,basicDay'
            }}
            defaultDate= {moment()}
            navLinks= {true} // can click day/week names to navigate views
            editable= {true}
            eventLimit= {true} // allow "more" link when too many calendarData
            events = {this.state.calendarData}	
        />
          </div>
        </div>
      </div>
    );
  }
}
export default Calendar