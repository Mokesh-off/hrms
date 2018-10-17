import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'
import './LeaveRequest.css'
import Popup from 'reactjs-popup'

class LeaveRequest extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      EmpId: '',
      EmpName: '',
      TotalDays: '1',
      FromDate: moment(),
      ToDate: moment(),
      LeaveType: '',
      LeaveReason: '',
      ReqestId: moment(),
      appliedOn: moment(),
      status: '',
      exclude: [],
      pubHolidays: JSON.parse(window.localStorage.getItem('Data')),
      errdate: '',
      open: false,
      dateErr: '',
      erroption: '',
      opText: '',
      Err: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.DateFromChange = this.DateFromChange.bind(this)
    this.DateToChange = this.DateToChange.bind(this)
    this.numOfDays = this.numOfDays.bind(this)
    this.validation = this.validation.bind(this)
  }
  componentDidMount () {
    
  }
  validation () { //  validating the input values
    this.setState({
      errdate: '',
      dateErr: '',
      erroption: '',
      opText: '',
      Err: ''
    })
    if (this.state.TotalDays === '' || this.state.FromDate === '' ||
      this.state.ToDate === '' || this.state.LeaveType === '' || this.state.LeaveReason === '') {
      this.setState({ Err: 'Fields can not be empty ' })
      return (false)
    }
    if (this.state.FromDate._d > this.state.ToDate._d) {
      this.setState({ errdate: '1px solid red', dateErr: 'From date need to be proper' })
      return (false)
    }
    var data = JSON.parse(window.localStorage.getItem('Data'))
    var currentUserId = JSON.parse(window.localStorage.getItem('currentUserId'))
    this.setState({ EmpId: this.state.EmpId = currentUserId })
    for (var i = 0; i < data.Employee.length; i++) {
      if (data.Employee[i].EmpId === currentUserId) {
        if (this.state.LeaveType === 'Casual Leave') {
          if (data.Employee[i].PendingLeaves.Planned < this.state.TotalDays) {
            this.setState({ opText: 'You have only ' + data.Employee[i].PendingLeaves.Planned + ' days', erroption: '1px solid red' })
            return false
          }
        } else if (this.state.LeaveType === 'Emergency Leave') {
          if (this.state.TotalDays > data.Employee[i].PendingLeaves.EmergencyLeave) {
            this.setState({ opText: 'You have only ' + data.Employee[i].PendingLeaves.EmergencyLeave + ' days', erroption: '1px solid red' })
            return (false)
          }
        } else if (this.state.LeaveType === 'Sick Leave') {
          if (this.state.TotalDays > data.Employee[i].PendingLeaves.Sick) {
            this.setState({ opText: 'You have only ' + data.Employee[i].PendingLeaves.Sick + ' days', erroption: '1px solid red' })
            return (false)
          }
        } else if (this.state.LeaveType === 'Earned Leave') {
          if (this.state.TotalDays > data.Employee[i].PendingLeaves.Privilege) {
            this.setState({ opText: 'You have only ' + data.Employee[i].PendingLeaves.Privilege + ' days', erroption: '1px solid red' })
            return (false)
          }
        }
      }
    }
    // var start = JSON.stringify(this.state.FromDate).substr(1, 10)
    // var end = new Date(this.state.ToDate)
    // var loop = new Date(start)
    // var newDate, secDate
    // while (loop <= end) {
    //   console.log(loop)
    //   data.leaveRequest.map((leaveRequest) => {
    //     if (leaveRequest.EmpId === this.state.EmpId) {
    //       var from = JSON.stringify(leaveRequest.FromDate).substr(1, 10)
    //       var to = new Date(leaveRequest.ToDate)
    //       var loop2 = new Date(from)
    //       console.log(from, to, loop2)
    //       while (loop2 <= to) {
    //         // console.log(loop2, to)
    //         if (loop2 === loop) {
    //           // console.log(loop2, loop)
    //         }
    //         secDate = loop2.setDate(loop2.getDate() + 1)
    //         loop2 = new Date(secDate)
    //       }
    //     }
    //   })
    //   newDate = loop.setDate(loop.getDate() + 1)
    //   loop = new Date(newDate)
    // }
    return (true)
  }
  handleChange (e) { // To set the values to the state
    this.setState({ [e.target.name]: e.target.value })
  }
  DateFromChange (date) { // Update the From date from user input
    this.setState({ FromDate: date }, () => {
    })
  }
  DateToChange (date) { // Update the To date from the User input
    this.setState({ ToDate: this.state.ToDate = date }, () => {
    })
  }
  handleSubmit (event) {
    event.preventDefault()
    this.numOfDays()
    if (this.validation()) {
      this.setState({ open: this.state.open = true })
    }
  }
  success () {
    // Calling the validation function and
    // Updating the value to the Local storage
    var obj = Object.assign({}, {
      EmpId: JSON.parse(window.localStorage.getItem('currentUserId')),
      EmpName: JSON.parse(window.localStorage.getItem('currentUserName')),
      appliedOn: this.state.appliedOn._d,
      ReqestId: this.state.ReqestId._d.getTime(),
      FromDate: this.state.FromDate,
      ToDate: this.state.ToDate,
      LeaveType: this.state.LeaveType,
      TotalDays: this.state.TotalDays,
      LeaveReason: this.state.LeaveReason,
      status: 'Pending'
    })
    console.log(obj)
    var data = JSON.parse(window.localStorage.getItem('Data'))
    if (data.leaveRequest) {
      // checked the key is present. If it's present than append the value
      data.leaveRequest[data.leaveRequest.length] = obj
      window.localStorage.setItem('Data', JSON.stringify(data))
      document.getElementById('success').style.opacity = 1
      setTimeout(function () { document.getElementById('success').style.opacity = 0 }, 1000)
      this.calldispatch()
    } else {
      // If not then create a key and append the value
      data['leaveRequest'] = []
      data.leaveRequest[data.leaveRequest.length] = obj
      window.localStorage.setItem('Data', JSON.stringify(data))
      document.getElementById('success').style.opacity = 1
      setTimeout(function () { document.getElementById('success').style.opacity = 0 }, 1000)
      this.calldispatch()
    }
  }
  close () {
    this.setState({
      open: this.state.open = false
    })
  }
  calldispatch () {
    // set the functions to its initial state
    this.setState({
      FromDate: moment(),
      ToDate: moment(),
      ReqestId: moment(),
      appliedOn: moment(),
      LeaveType: '',
      open: false,
      LeaveReason: '',
      TotalDays: ''
    })
  }
  isWeekday (date) {
    // To block the weekdays in the calendar
    const day = date._d.getDay()
    return day !== 0 && day !== 6
  }
  numOfDays () {
    if (this.state.FromDate === null || this.state.ToDate === null) {
      return this.setState({ TotalDays: 0 })
    }
    var start = JSON.stringify(this.state.FromDate).substr(1, 10)
    var end = new Date(this.state.ToDate)
    var flag = false
    var loop = new Date(start)
    var date, newDate, count
    var holiday = JSON.parse(window.localStorage.getItem('Data'))
    holiday = holiday.holidays
    if (loop <= end) {
      count = 0
      while (loop <= end) {
        date = JSON.stringify(loop).substr(1, 10)
        holiday.map((holiday) => { // To check it's holiday
          if (holiday === date) {
            flag = true
          }
        })
        if ((loop.getDay() === 0 || loop.getDay() === 6 || flag === true) === false) {
          var leavDate = JSON.stringify(loop).substr(1, 10)
          console.log(leavDate)
          count++
        }
        flag = false
        newDate = loop.setDate(loop.getDate() + 1)
        loop = new Date(newDate)
      }
    } else {
      count = 0
      while (loop <= end) {
        date = JSON.stringify(loop).substr(1, 10)
        holiday.map((holiday) => { // To check it's holiday
          if (holiday === date) {
            flag = true
          }
        })
        if ((loop.getDay() === 0 || loop.getDay() === 6 || flag === true) === false) {
          (count++)
        }
        newDate = loop.setDate(loop.getDate() - 1)
        loop = new Date(newDate)
      }
    }
    this.setState({ TotalDays: this.state.TotalDays = count })
  }
  render () {
    if (!localStorage.getItem('currentUserId')) {
      return (
        window.location.replace('/')
      )
    } else {
      return (
        <div className='rightContainer'>
          <div id='success'>
            <h3 id='changed'>Successfully submitted</h3>
          </div>
          <div>
            <div className='head'>
              <h2>Leave Request</h2>
            </div>
            <form className='reqForm'>
              <div className='reqRow'>
                <div className='reqText'>
                  <label htmlFor='drop'>Type</label>
                </div>
                <div className='reqInput'>
                  <select name='LeaveType' className='reqOptions width' value={this.state.LeaveType}
                    onChange={this.handleChange} style={{ border: this.state.erroption }}>
                    <option value='' disabled>select your option</option>
                    <option value='Casual Leave'>Casual Leave</option>
                    <option value='Emergency Leave'>Emergency Leave</option>
                    <option value='Sick Leave'>Sick leave</option>
                    <option value='Earned Leave'>Earned Leave</option>
                    <option value='LOP'>LOP</option>
                  </select>
                </div>
                <div className='err'>{this.state.opText}</div>
              </div>
              <div className='reqRow'>
                <div className='reqText'>
                  <label htmlFor='drop'>From</label>
                </div>
                <div value={this.state.FromDate} name='From'>
                  <DatePicker className='reqOptions' style={{ border: this.state.errdate }}
                    selected={this.state.FromDate}
                    filterDate={this.isWeekday}
                    showYearDropdown
                    scrollableYearDropdown
                    dateFormat='DD/MM/YYYY'
                    minDate={moment()}
                    maxDate={moment().add(24, 'months')}
                    showDisabledMonthNavigation
                    onChange={e => this.DateFromChange(e)}
                    yearDropdownItemNumber={2}
                    excludeDates={this.state.exclude}
                    placeholderText='Select a weekday'
                    name='From' />
                </div>
                <div className='err'>{this.state.dateErr}</div>
              </div>
              <div className='reqRow'>
                <div className='reqText'>
                  <label htmlFor='drop'>To</label>
                </div>
                <div name='To' value={this.state.ToDate} className='reqInput'>
                  <DatePicker className='reqOptions' style={{ border: this.state.errdate }}
                    selected={this.state.ToDate}
                    filterDate={this.isWeekday}
                    showYearDropdown
                    dateFormat='DD/MM/YYYY'
                    onChange={e => this.DateToChange(e)}
                    scrollableYearDropdown
                    minDate={this.state.FromDate}
                    maxDate={moment(this.state.FromDate).add(24, 'months')}
                    showDisabledMonthNavigation
                    yearDropdownItemNumber={2}
                    excludeDates={this.state.exclude}
                    placeholderText='Select a weekday'
                    name='To' />
                </div>
                <div className='err'>{this.state.dateErr}</div>
              </div>
              {/* <div className='reqRow'>
                <div className='reqText'>
                  <label htmlFor='Number_of_Days'>Number of Days</label>
                </div>
                <div className='reqInput'>
                  <input className='reqOptions disable' type='text' value={this.state.TotalDays} disabled id='TotalDays' name='TotalDays' />
                </div>
              </div> */}
              <div className='reqRow'>
                <div className='reqText'>
                  <label htmlFor='drop'>Reason</label>
                </div>
                <div name='LeaveReason' className='reqInput'
                  onChange={e => this.handleChange(e)}>
                  <textarea className='reqOptions' value={this.state.LeaveReason} placeholder='Reason' name='LeaveReason' />
                </div>
                <div className='err'>{this.state.Err}</div>
              </div>
              <div >
                <button className='levAddbutton'
                  onClick={this.handleSubmit}>Submit
                </button>
              </div>
              <Popup open={this.state.open} modal>
                <div id='sec'>
                  <a id='closebtn' onClick={this.close.bind(this)}>&times;</a>
                  <div><label>From date :</label></div>
                  <div>{JSON.stringify(this.state.FromDate).substr(1, 10)}</div>
                  <div><label>To date :</label></div>
                  <div>{JSON.stringify(this.state.ToDate).substr(1, 10)}</div>
                  <div><label>Number of days :</label></div>
                  <div>{this.state.TotalDays}</div>
                  <button onClick={this.close.bind(this)}>Cancel</button>
                  <button onClick={this.success.bind(this)}>Ok</button>
                </div>
              </Popup>
            </form>
          </div>
          {/* <Popup open={this.state.open} closeOnDocumentClick modal></Popup> */}
        </div>// rightContainer done
      )
    }
  }
}
export default LeaveRequest
