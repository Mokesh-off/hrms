import React, { Component } from 'react'
import './LeaveRequests.css'
import Popup from 'reactjs-popup'
// import ReactDOM from 'react-dom'
class LeaveRequests extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentRequestID: '',
      LeaveRecord: JSON.parse(localStorage.getItem('Data')),
      deletedRow: [],
      open: false,
      ischecked: false,
      allchecked: false,
      checkedValue: [],
      index: ''
    }
  }
  componentDidMount () {
    let data = JSON.parse(localStorage.getItem('Data'))
    // this.setState({ LeaveRecord: data.leaveRequest })
    if (data.deletedRow) {
      this.setState({ deletedRow: data.deletedRow })
    }
  }
  closePopup (e) {
    var index = this.state.index
    this.setState({ open: false }, () => this.delete(index))
  }
  // Onclicking view button select the respective request to see the details
  sendReqId (e, i) {
    localStorage.setItem('currentRequestID', i)
  }
  // Delete the request from the list but not from the JSON
  delete (index) {
    // if (!this.state.open) {
    var data = JSON.parse(localStorage.getItem('Data'))
    let reqId = this.state.LeaveRecord.leaveRequest[index].ReqestId
    if (data.deletedRow) {
      data.deletedRow[data.deletedRow.length] = reqId
      this.state.deletedRow.push(reqId)
      localStorage.setItem('Data', JSON.stringify(data))
    } else {
      data['deletedRow'] = []
      data.deletedRow[data.deletedRow.length] = reqId
      this.state.deletedRow.push(reqId)
      localStorage.setItem('Data', JSON.stringify(data))
    }
    // }
    window.location.reload(1)
  }

  // Reject leave request
  changeToReject (e, i) {
    let newState = Object.assign({}, this.state)
    // console.log(newState)
    let index = i
    newState.LeaveRecord.leaveRequest[index].status = 'Rejected'
    window.localStorage.setItem('Data', JSON.stringify(this.state.LeaveRecord))
    this.setState({ open: true, index: i })
    this.setState({ status: 'Rejected' })
    // this.delete(index)
    console.log()
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
          leave > 0 ? (leave = leave) : (leave = 0)
          newState.LeaveRecord.Employee[emp - 1].PendingLeaves.Planed = leave
        }
        if (type === 'Emergency leave') {
          leave1 = leave1 - days
          leave1 > 0 ? (leave1 = leave1) : (leave1 = 0)
          newState.LeaveRecord.Employee[emp - 1].PendingLeaves.LOP = leave1
        }
        if (type === 'Sick leave') {
          leave2 = leave2 - days
          leave2 > 0 ? (leave2 = leave2) : (leave2 = 0)
          newState.LeaveRecord.Employee[emp - 1].PendingLeaves.Sick = leave2
        }
        if (type === 'Earned Leave') {
          leave3 = leave3 - days
          leave3 > 0 ? (leave3 = leave3) : (leave3 = 0)
          newState.LeaveRecord.Employee[emp - 1].PendingLeaves.PriL = leave3
        }
      }
    })
    this.setState({ [this.state.LeaveRecord.Employee]: newObject })
    localStorage.setItem('Data', JSON.stringify(this.state.LeaveRecord))
  }

  // Approve leave request
  changeToApprove (e, i) {
    let newState = Object.assign({}, this.state)
    console.log(newState)
    let index = i
    newState.LeaveRecord.leaveRequest[index].status = 'Approved'
    window.localStorage.setItem('Data', JSON.stringify(this.state.LeaveRecord))
    this.setState({ status: 'Approved' })
    this.reduceLeaves(index)
    this.setState({ open: true, index: i })
    // this.delete(index)
  }

  selectAll (e) {
    var inputElements = document.getElementsByClassName('selectcheckbox')
    for (var i = 0; inputElements[i]; ++i) {
      inputElements[i].checked = true
      this.setState({ ischecked: this.state.ischecked = true })
    }
  }
  clearAll (e) {
    var inputElements = document.getElementsByClassName('selectcheckbox')
    for (var i = 0; inputElements[i]; ++i) {
      inputElements[i].checked = false
    }
  }
  rejectAll (e) {
    var inputElements = document.getElementsByClassName('selectcheckbox')
    for (var i = 0; inputElements[i]; ++i) {
      if (inputElements[i].checked) {
        this.state.checkedValue.push(inputElements[i].getAttribute('data-id'))
      }
    }
    for (var i = 0; i < this.state.checkedValue.length; ++i) {
      let index = parseInt(this.state.checkedValue[i])
      let newState = Object.assign({}, this.state)
      newState.LeaveRecord.leaveRequest[index].status = 'Rejected'
      window.localStorage.setItem(
        'Data',
        JSON.stringify(this.state.LeaveRecord)
      )
    }
    this.setState({ open: true, status: 'Rejected' })
    for (var i = 0; i < this.state.checkedValue.length; ++i) {
      let index = parseInt(this.state.checkedValue[i])
      this.delete(index)
    }
    this.setState({ checkedValue: [] })
  }
  // *********************************************************
  approveAll (e) {
    var inputElements = document.getElementsByClassName('selectcheckbox')
    for (var i = 0; inputElements[i]; ++i) {
      if (inputElements[i].checked) {
        this.state.checkedValue.push(inputElements[i].getAttribute('data-id'))
      }
    }
    for (var i = 0; i < this.state.checkedValue.length; ++i) {
      let index = parseInt(this.state.checkedValue[i])
      let newState = Object.assign({}, this.state)
      newState.LeaveRecord.leaveRequest[index].status = 'Approved'
      window.localStorage.setItem(
        'Data',
        JSON.stringify(this.state.LeaveRecord)
      )
      this.reduceLeaves(index)
    }
    this.setState({ open: true, status: 'Approved' })
    for (var i = 0; i < this.state.checkedValue.length; ++i) {
      let index = parseInt(this.state.checkedValue[i])
      this.delete(index)
    }
    this.setState({ checkedValue: [] })
  }
  check () {
    this.setState({ allchecked: !this.state.allchecked }, () =>
      (this.state.allchecked)
        ? this.selectAll() : this.clearAll()
    )
  }
  ischeck () {
    this.setState({ ischecked: this.state.ischecked = !this.state.ischecked })
    var inputElements = document.getElementsByClassName('selectcheckbox')
    var allcheck = document.getElementById('Id')
    var len = inputElements.length
    var count = 0
    for (var i = 0; inputElements[i]; ++i) {
      count++
      if (inputElements[i].checked === false) {
        allcheck.checked = false
        count--
      }
    }
    if (count === len) {
      allcheck.checked = true
    }
  }

  render () {
    let data = JSON.parse(localStorage.getItem('Data'))
    if (data.leaveRequest) {
      return (
        // List of leave requests
        <div className='leaveRecord'>
          <div>
            <button className='LevReqbutton RejectButton' onClick={e => this.rejectAll(e)}>Reject</button>
            <button className='LevReqbutton ApproveButton' onClick={e => this.approveAll(e)}>Approve</button>
          </div>
          <table>
            <thead className='thead1'>
              <tr className='thead1'>
                <td className='tdStyle'>
                  <input
                    type='checkbox'
                    id='Id'
                    defaultChecked={this.state.allchecked}
                    onChange={this.check.bind(this)}
                    value={this.state.allchecked}
                  />
                </td>
                <td className='tdStyle'>EmpID</td>
                <td className='tdStyle'>EmpName</td>
                <td className='tdStyle'>Applied On</td>
                <td className='tdStyle'>LeaveType</td>
                <td className='tdStyle'>From Date</td>
                <td className='tdStyle'>To Date</td>
                <td className='tdStyle'>Days</td>
                <td className='tdStyle'>Reason</td>
                <td className='tdStyle'>Action</td>
              </tr>
            </thead>
            <tbody>
              {data.leaveRequest.map((record, i) => {
                return this.state.deletedRow.indexOf(record.ReqestId) === -1 ? (
                  <tr key={i} className='tdStyle'>
                    <td className='tdStyle'>
                      <input
                        type='checkbox'
                        data-id={i}
                        className='selectcheckbox'
                        defaultChecked={this.state.ischecked}
                        onChange={this.ischeck.bind(this)}
                      />
                    </td>
                    <td className='tdStyle'>{record.EmpId}</td>
                    <td className='tdStyle'>{record.EmpName}</td>
                    <td className='tdStyle'>{record.ReqestId.substr(0, 10)}</td>
                    <td className='tdStyle'>{record.LeaveType}</td>
                    <td className='tdStyle'>{record.FromDate.substr(0, 10)}</td>
                    <td className='tdStyle'>{record.ToDate.substr(0, 10)}</td>
                    <td className='tdStyle'>{record.TotalDays}</td>
                    <td className='tdStyle'>{record.LeaveReason}</td>
                    <td className='tdStyle'>
                      <button
                        className='RejectButton'
                        onClick={e => this.changeToReject(e, i)}
                      >
                        Reject
                      </button>
                      <span>&nbsp;</span>
                      <button
                        className='ApproveButton'
                        onClick={e => this.changeToApprove(e, i)}
                      >
                        Approve
                      </button>
                    </td>
                  </tr>
                ) : (
                  ''
                )
              })}
            </tbody>
          </table>
          <Popup open={this.state.open} closeOnDocumentClick modal>
            <div>
              <span>{this.state.status} successfully</span>
              <br />
              <button className='button' onClick={e => this.closePopup(e)}>
                OK
              </button>
            </div>
          </Popup>
        </div>
      )
    } else {
      return <div className='noRequset'>No requests</div>
    }
  }
}

export default LeaveRequests
