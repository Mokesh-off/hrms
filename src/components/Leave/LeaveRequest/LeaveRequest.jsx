import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'
import './LeaveRequest.css'
class LeaveRequest extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      EmpId: '',
      EmpName: '',
      TotalDays: '',
      FromDate: moment(),
      ToDate: moment(),
      LeaveType: '',
      LeaveReason: ' ',
      ReqestId: moment(),
      status: '',
      comment: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.DateFromChange = this.DateFromChange.bind(this)
    this.DateToChange = this.DateToChange.bind(this)
    this.numOfDays = this.numOfDays.bind(this)
    this.validation = this.validation.bind(this)
  }
  validation () { //  validating the input values
<<<<<<< HEAD
    console.log('validation')
    if (this.state.TotalDays === '' || this.state.FromDate === '' ||
      this.state.ToDate === '' || this.state.LeaveType === '' || this.state.LeaveReason === '') {
      alert("Fields can't be empty ")
      console.log('empty')
=======
    if (this.state.EmpId === '' && this.state.TotalDays === '' && this.state.FromDate === '' &&
      this.state.ToDate === '' && this.state.LeaveType === '' && this.state.LeaveReason === '') {
      alert("Fields can't be empty ")
>>>>>>> develop
      return (false)
    }
    if (this.state.FromDate._d >= this.state.ToDate._d) {
      alert('From date need to be proper')
      return (false)
    }
    if (this.state.TotalDays === '^[0-9]*$') {
      alert('Only numbers in this field')
      return (false)
    }
    return (true)
  }
  handleChange (e) { // To set the values to the state
    this.setState({ [e.target.name]: e.target.value })
  }
  DateFromChange (date) { // Update the From date from user input
    this.setState({ FromDate: date })
  }
  DateToChange (date) { // Update the To date from the User input
    this.setState({ ToDate: this.state.ToDate = date })
    this.numOfDays()
  }
  handleSubmit (event) {
    // Calling the validation function and
    // Updating the value to the Local storage
    event.preventDefault()
    if (this.validation()) {
      var data = JSON.parse(window.localStorage.getItem('Data'))
      var currentUserId = window.localStorage.getItem('currentUserId')
      var currentUser = window.localStorage.getItem('currentUser')
      if (data.leaveRequest) {
        // checked the key is present. If it's present than append the value
        this.setState({ EmpId: currentUserId, EmpName: currentUser }, () => {
          data.leaveRequest[data.leaveRequest.length] = this.state
          window.localStorage.setItem('Data', JSON.stringify(data))
        })
      } else {
        // If not then create a key and append the value
        data['leaveRequest'] = []
        this.setState({ EmpId: currentUserId, EmpName: currentUser }, () => {
          data.leaveRequest[data.leaveRequest.length] = this.state
          window.localStorage.setItem('Data', JSON.stringify(data))
        })
      }
    }
  }
  calldispatch () {
    // set the functions to its initial state
    this.setState({
      EmpId: '',
      FromDate: moment(),
      ToDate: moment(),
      LeaveType: '',
      LeaveReason: ' ',
      TotalDays: ''
    })
  }
  isWeekday (date) {
    // To block the weekdays in the calendar
    const day = date._d.getDay()
    return day !== 0 && day !== 6
  }
  numOfDays () {
    // To generate number of holiday days
    var start = this.state.FromDate._d
    this.setState({ start: this.state.FromDate._d })
    var end = this.state.ToDate._d
    this.setState({ end: this.state.ToDate._d })
    var loop = new Date(start)
    end = new Date(end)
    var count = 0
    var flag = false
    var holiday = JSON.parse(window.localStorage.getItem('Data'))
    holiday = holiday.holidays
    while (loop <= end) {
      var yyyy = loop.getFullYear()
      var mm = loop.getDay()
      var d = loop.getDate()
      var date = yyyy + '-' + mm + '-' + d
      flag = holiday.map((ho) => // To check it's holiday
        (ho === date)
      );
      (loop.getDay() === 0 || loop.getDay() === 6 || flag === true) ? (null) : (count++)
      var newDate = loop.setDate(loop.getDate() + 1)
      loop = new Date(newDate)
    }
    this.setState({ TotalDays: count })
  }
  render () {
    var holidayList = JSON.parse(window.localStorage.getItem('Data'))
    holidayList = holidayList.holidays

    return (
      <div className='rightContent'>
        <div className='leaveRequestMain'>
          <div className='container'>
            <form >
              <div className='row'>
                <div className='row-1'>
                  <label htmlFor='drop'>Type</label>
                </div>
                <div className='row-2'>
                  <select name='LeaveType' value={this.state.LeaveType} onChange={this.handleChange}>
                    <option value='' disabled>select your option</option>
                    <option value='Casual Leave'>Casual Leave</option>
                    <option value='Emergency leave'>Emergency Leave</option>
                    <option value='Sick leave'>Sick leave</option>
                    <option value='Earned Leave'>Earned Leave</option>
                    <option value='maternity Leave'>maternity Leave</option>
                    <option value='Other Leave'>Other Leave</option>
                  </select>
                </div>
              </div>
              <div className='row'>
                <div className='row-1'>
                  <label htmlFor='drop'>From</label>
                </div>
                <div className='row-2' value={this.state.FromDate} name='From' >
                  <DatePicker className='Dp'
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
                    excludeDates={holidayList}
                    isClearable
                    placeholderText='Select a weekday'
                    name='From' />
                </div>
              </div>
              <div className='row'>
                <div className='row-1'>
                  <label htmlFor='drop'>To</label>
                </div>
                <div className='row-2' name='To' value={this.state.ToDate} >
                  <DatePicker className='Dp'
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
                    excludeDates={holidayList}
                    isClearable
                    placeholderText='Select a weekday'
                    name='To' />
                </div>
              </div>
              <div className='row'>
                <div className='row-1'>
                  <label htmlFor='Number_of_Days'>Number_of_Days</label>
                </div>
                <div className='row-2' >
                  <input type='text' value={this.state.TotalDays} disabled id='TotalDays' size='40' name='TotalDays' />
                </div>
              </div>
              <div className='row'>
                <div className='row-1'>
                  <label htmlFor='drop'>Reason</label>
                </div>
                <div className='row-3' name='LeaveReason' value={this.state.LeaveReason} onChange={e => this.handleChange(e)}>
                  <textarea placeholder='Reason' name='LeaveReason' />
                </div>
              </div>
              <div className='row' >
                <button
                  className='Button' onClick={this.handleSubmit}>Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>// rightContainer done
    )
  }
}
export default LeaveRequest
