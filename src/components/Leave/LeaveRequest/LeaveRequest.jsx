import React from 'react'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import './LeaveRequest.css'
class LeaveRequest extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        EmpId: '',
        EmpName:'',
        TotalDays: '',
        FromDate: moment(),
        ToDate: moment(),
        LeaveType: '',
        LeaveReason: ' ',
        ReqestId: moment(),
        status:'',
        comment:''
      }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.DateFromChange = this.DateFromChange.bind(this)
    this.DateToChange = this.DateToChange.bind(this)
    this.numOfDays = this.numOfDays.bind(this)
  }
  handleChange =(e)=> {
    this.setState({[e.target.name]: e.target.value})
  }
  DateFromChange(date) {
    // console.log(date);
    this.setState({FromDate: date });
  }
  DateToChange(date) {
    this.setState({ToDate : this.state.ToDate = date });
    this.numOfDays();
  }
  handleSubmit (event){
    event.preventDefault();
    // console.log('.....onsubmit......');
    // console.log(JSON.stringify(this.state)+' onsubmit');
    // var data = [];
    // data.push(this.state);
    // var value= JSON.parse(localStorage.getItem('Data'));
    // (value.leaveRequest[0] === null || value.leaveRequest[0] === undefined) ? (null) :
    //   (this.setState({ReqestId : this.state.ReqestId = value.leaveRequest[0].ReqestId})
    // );

    // console.log(value.leaveRequest+" ............LeaveReq............");
    // // console.log(this.state.ReqestId);
    // this.setState({ReqestId : this.state.ReqestId += 1});
    // var currentUser = localStorage.getItem('currentUserId');
    // this.setState({EmpId : this.state.EmpId = currentUser});
    // data.push(value);
    // localStorage.setItem('Data.leaveRequest',JSON.stringify(data));
    // this.calldispatch.call(this);
    var data = JSON.parse(localStorage.getItem('Data'));
    var currentUserId = localStorage.getItem('currentUserId');
    var currentUser = localStorage.getItem('currentUser');
    if (data.leaveRequest) {
      
      this.setState({EmpId: currentUserId, EmpName : currentUser}, () => {
        data.leaveRequest[data.leaveRequest.length] = this.state
        localStorage.setItem('Data', JSON.stringify(data));
      });
    } else {
      data['leaveRequest'] = []
      this.setState({EmpId: currentUserId}, () => {
        data.leaveRequest[data.leaveRequest.length] = this.state
        localStorage.setItem('Data', JSON.stringify(data));
      });
    }
  }
  
  calldispatch () {
    // console.log('calldispatch');
    this.setState({
      EmpId: '',
      FromDate: moment(),
      ToDate: moment(),
      LeaveType: '',
      LeaveReason: ' ',
      TotalDays: ''
    });
  }
  isWeekday = (date) => {
    const day = date._d.getDay();
    return day !== 0 && day !== 6 
  }
  numOfDays=() => {
    var start = this.state.FromDate._d;
    this.setState({start : this.state.FromDate._d});
    var end  = this.state.ToDate._d
    this.setState({end : this.state.ToDate._d})
    var loop = new Date(start);
    end  = new Date(end);
    var count = 0;
    while(loop <= end){
      (loop.getDay()=== 0 || loop.getDay() === 6)?
        (null) : (count++);  
      var newDate = loop.setDate(loop.getDate() + 1);
      loop = new Date(newDate);
    }
    this.setState({TotalDays: count});
  }
  render(){
    var holidayList = JSON.parse(localStorage.getItem('Data'));
    holidayList=holidayList.holidays;

    return(
      <div className='rightContent'>
      <div className="leaveRequestMain">
        <div className="container">
          <form >
            <div className="row">
              <div className="row-1">
                <label htmlFor="drop">Type</label>
              </div>
              <div className="row-2">
                <select name="LeaveType" value={this.state.LeaveType} onChange={e =>this.handleChange(e)}>
                  <option value="" disabled>select your option</option>
                  <option value="Casual Leave">Casual Leave</option>
                  <option value="Emergency leave">Emergency Leave</option>
                  <option value="Sick leave">Sick leave</option>
                  <option value="Earned Leave">Earned Leave</option>
                  <option value="maternity Leave">maternity Leave</option>
                  <option value="Other Leave">Other Leave</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="row-1">
                <label htmlFor="drop">From</label>
              </div>
              <div className="row-2" value={this.state.FromDate} name="From"   >
                <DatePicker className="Dp"
                  selected={this.state.FromDate}
                  filterDate={this.isWeekday}
                  showYearDropdown
                  scrollableYearDropdown
                  dateFormat="DD/MM/YYYY"
                  minDate={moment()}
                  maxDate={moment().add(24, "months")}
                  showDisabledMonthNavigation
                  onChange={e=>this.DateFromChange(e)}
                  yearDropdownItemNumber={2}
                  excludeDates = {holidayList}
                  isClearable={true}
                  placeholderText="Select a weekday"
                  name="From"/>
              </div>
            </div>
            <div className="row">
              <div className="row-1">
                <label htmlFor="drop">To</label>
              </div>
              <div className="row-2"  name="To" value={this.state.ToDate}  >
                <DatePicker className="Dp"
                  selected={this.state.ToDate}
                  filterDate={this.isWeekday}
                  showYearDropdown
                  dateFormat="DD/MM/YYYY"
                  onChange={e=>this.DateToChange(e)}
                  scrollableYearDropdown
                  minDate={this.state.FromDate}
                  maxDate={moment(this.state.FromDate).add(24, "months")}
                  showDisabledMonthNavigation
                  yearDropdownItemNumber={2}
                  excludeDates = {holidayList}
                  isClearable={true}
                  placeholderText="Select a weekday"
                  name="To"/>
              </div>
            </div>
            <div className="row">
              <div className="row-1">
                <label htmlFor="Number_of_Days">Number_of_Days</label>
              </div>
              <div className="row-2" >
                <input type="text"  value={this.state.TotalDays} onChange={e => this.handleChange(e)} id="TotalDays"  size="40" name="TotalDays"  />
              </div>
            </div>
            <div className="row">
              <div className="row-1">
                <label htmlFor="drop">Reason</label>
              </div>
              <div className="row-3" name="LeaveReason" value={this.state.LeaveReason} onChange={e => this.handleChange(e)}>
                <textarea placeholder="Reason" name="LeaveReason" ></textarea>
              </div>
            </div>
            <div className="row" >
              <button 
              id="submit" onClick = {this.handleSubmit}>Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>//rightContainer done
    );
  }
}
export default LeaveRequest;
