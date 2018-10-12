import React, { Component } from 'react'
import './LeaveRecord.css'
import Popup from 'reactjs-popup'
import DatePicker from 'react-datepicker'

class LeaveRecord extends Component {
  constructor (props) {
    super(props)
    this.state = {
      LeaveRecord: JSON.parse(localStorage.getItem('Data')),
      open: false,
      FromDate: null,
      ToDate: null,
      newRecord: [],
      visible: false
    }
  }
  validateDate (chDate) {
    var dateFromDay = this.state.FromDate._d.getDate()
    var dateFromMonth = this.state.FromDate._d.getMonth() + 1
    var dateFromYear = this.state.FromDate._d.getFullYear()
    var dateToDay = this.state.ToDate._d.getDate()
    var dateToMonth = this.state.ToDate._d.getMonth() + 1
    var dateToYear = this.state.ToDate._d.getFullYear()
    var dateArr = chDate.split('-')

    var dateCheckDay = dateArr[2]
    var dateCheckMonth = dateArr[1]
    var dateCheckYear = dateArr[0]

    var str1 = dateFromMonth + '/' + dateFromDay + '/' + dateFromYear
    var str2 = dateToMonth + '/' + dateToDay + '/' + dateToYear
    var str3 = dateCheckMonth + '/' + dateCheckDay + '/' + dateCheckYear

    var minDate = new Date(str1)
    var maxDate = new Date(str2)
    var chekDate = new Date(str3)

    var flag = chekDate >= minDate && chekDate <= maxDate
    console.log(flag)
    return flag
  }

  getNewRecord () {
    if (this.state.FromDate._d >= this.state.ToDate._d) {
      alert('Fromdate should proper...')
    } else {
      this.setState({ newRecord: [] }, () => {
        this.state.LeaveRecord.leaveRequest.map((record, i) => {
          var fromDate = record.ReqestId.substr(0, 10)
          console.log('fromdate -----------' + fromDate)
          if (this.validateDate(fromDate)) {
            this.state.newRecord.push(record)
          }
        })
        console.log(this.state.newRecord)
        this.setState({ visible: true })
      })
    }
  }

  getAllRecord () {
    this.setState({ visible: false })
  }

  DateFromChange (date) { // Update the From date from user input
    this.setState({ FromDate: date })
    console.log(this.state.FromDate)
  }
  DateToChange (date) { // Update the To date from the User input
    this.setState({ ToDate: date })
  }

  closePopup (e) {
    this.setState({ open: false })
  }
  sendReqId (e, i) {
    localStorage.setItem('currentRequestID', i)
  }

  changeToReject (e, i) {
    let newState = Object.assign({}, this.state)
    // console.log(newState)
    let index = i
    newState.LeaveRecord.leaveRequest[index].status = 'Rejected'
    window.localStorage.setItem('Data', JSON.stringify(this.state.LeaveRecord))
    this.setState({ open: true })
    this.setState({ status: 'Rejected' })
  }
  // Approve leave request
  changeToApprove (e, i) {
    let newState = Object.assign({}, this.state)
    console.log(newState)
    let index = i
    newState.LeaveRecord.leaveRequest[index].status = 'Approved'
    window.localStorage.setItem('Data', JSON.stringify(this.state.LeaveRecord))
    this.setState({ open: true })
    this.setState({ status: 'Approved' })
    this.reduceLeaves(index)
  }

  // Reduce number of days from employee's pending leaves, if request is approved
  reduceLeaves (index) {
    let emp = parseInt(this.state.LeaveRecord.leaveRequest[index].EmpId, 10)
    let type = this.state.LeaveRecord.leaveRequest[index].LeaveType
    let days = parseInt(this.state.LeaveRecord.leaveRequest[index].TotalDays)
    let leave = this.state.LeaveRecord.Employee[emp - 1].PendingLeaves.Planed
    let leave1 = this.state.LeaveRecord.Employee[emp - 1].PendingLeaves.LOP
    let leave2 = this.state.LeaveRecord.Employee[emp - 1].PendingLeaves.Sick
    let leave3 = this.state.LeaveRecord.Employee[emp - 1].PendingLeaves.PriL
    let newState = Object.assign({}, this.state)
    // alert(emp + "" + type)
    const newObject = this.state.LeaveRecord.Employee.map((data, i) => {
    // Compare employee ID and change the respective pending leaves
      if (data.EmpId === emp) {
        if (type === 'Casual Leave') {
          leave = leave - days
          leave > 0 ? leave = leave : leave = 0
          newState.LeaveRecord.Employee[emp - 1].PendingLeaves.Planed = leave
        }
        if (type === 'Emergency leave') {
          leave1 = leave1 - days
          leave1 > 0 ? leave1 = leave1 : leave1 = 0
          newState.LeaveRecord.Employee[emp - 1].PendingLeaves.LOP = leave1
        }
        if (type === 'Sick leave') {
          leave2 = leave2 - days
          leave2 > 0 ? leave2 = leave2 : leave2 = 0
          newState.LeaveRecord.Employee[emp - 1].PendingLeaves.Sick = leave2
        }
        if (type === 'Earned Leave') {
          leave3 = leave3 - days
          leave3 > 0 ? leave3 = leave3 : leave3 = 0
          newState.LeaveRecord.Employee[emp - 1].PendingLeaves.PriL = leave3
        }
      }
    })
    this.setState({ [this.state.LeaveRecord.Employee]: newObject })
    localStorage.setItem('Data', JSON.stringify(this.state.LeaveRecord))
  }

  render () {

    var newData = JSON.parse(localStorage.getItem('Data'))
    if (this.state.visible) {
      var data = this.state.newRecord
    } else {
      var data = newData.leaveRequest
    }
    if(!localStorage.getItem('currentUserId'))
    {
    return(
     window.location.replace('/')
    )
    }
    else{
    return (
      <div className='leaveRecord'>
        <button onClick={e => this.getNewRecord()}>Get</button> <span>&nbsp;</span>
        {/* <button onClick={e => this.getAllRecord()}>All</button> */}
        Fromdate
        <div className='displayDate' value={this.state.FromDate} name='From' >
          <DatePicker
            selected={this.state.FromDate}
            showYearDropdown
            scrollableYearDropdown
            dateFormat='DD/MM/YYYY'
            showDisabledMonthNavigation
            onChange={e => this.DateFromChange(e)}
            yearDropdownItemNumber={2}
            isClearable
            placeholderText='Select a weekday'
            name='From' />
        </div><span>&nbsp;</span>
        Todate
        <div className='displayDate2' name='To' value={this.state.ToDate}>
          <DatePicker
            selected={this.state.ToDate}
            showYearDropdown
            dateFormat='DD/MM/YYYY'
            onChange={e => this.DateToChange(e)}
            scrollableYearDropdown
            showDisabledMonthNavigation
            yearDropdownItemNumber={2}
            isClearable
            placeholderText='Select a weekday'
            name='To' />
        </div>
        <table>
          <thead className='thead1'>
            <tr className='thead1'>
              <td className='tdStyle'>EmpId</td>
              <td className='tdStyle'>EmpName</td>
              <td className='tdStyle'>Applied On</td>
              <td className='tdStyle'>LeaveType</td>
              <td className='tdStyle'>status</td>
              <td className='tdStyle'>LeaveReason</td>
              <td className='tdStyle'>Action</td>
            </tr>
          </thead>
          <tbody>
            {
              data.map((record, i) =>
                record.status === 'Approved'
                  ? <tr key={i} className='tdStyle'>
                    <td className='tdStyle'>{ ()=>{parseInt(record.EmpId)} }</td>
                    <td className='tdStyle'>{record.EmpName}</td>
                    <td className='tdStyle'>{record.EmpId.substr(1,(record.EmpId.length-2))}</td>
                    <td className='tdStyle'>{record.LeaveType}</td>
                    <td className='tdStyle'>{record.status}</td>
                    <td className='tdStyle'>{record.LeaveReason}</td>
                    <td className='tdStyle'>
                      <button className='RejectButton' onClick={e => this.changeToReject(e, i)}>Reject</button>
                    </td>
                  </tr>
                  : <tr key={i} className='tdStyle'>
                    <td className='tdStyle'>{record.EmpId.substr(1,(record.EmpId.length-2))}</td>
                    <td className='tdStyle'>{record.EmpName}</td>
                    <td className='tdStyle'>{record.ReqestId.substr(0, 10)}</td>
                    <td className='tdStyle'>{record.LeaveType}</td>
                    <td className='tdStyle'>{record.status}</td>
                    <td className='tdStyle'>{record.LeaveReason}</td>
                    <td className='tdStyle'>
                      <button className='ApproveButton' onClick={e => this.changeToApprove(e, i)}>Approve</button>
                    </td>
                  </tr>
              )}
          </tbody>
        </table>
        <Popup open={this.state.open} closeOnDocumentClick modal>
          <div>
            <span>{this.state.status} successfully</span><br />
            <button className='button' onClick={e => this.closePopup(e)}>OK</button>
          </div>
        </Popup>
      </div>
    )
    }
  }
}
export default LeaveRecord
