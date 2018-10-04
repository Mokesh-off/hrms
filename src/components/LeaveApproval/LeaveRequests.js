import React, { Component } from 'react'
import './LeaveRequests.css'
import { NavLink } from 'react-router-dom'

class LeaveRequests extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentRequestID: '',
      LeaveRecord: [],
      deletedRow: []

    }
  }

  componentDidMount () {
    let data = JSON.parse(localStorage.getItem('Data'))
    this.setState({ LeaveRecord: data.leaveRequest })
    if (data.deletedRow) {
      this.setState({ deletedRow: data.deletedRow })
    }
  }

  // Onclicking view button select the respective request to see the details
  sendReqId (e, i) {
    localStorage.setItem('currentRequestID', i)
  }

  // Delete the request from the list but not from the JSON
  delete (e, index) {
    var data = JSON.parse(localStorage.getItem('Data'))
    let reqId = this.state.LeaveRecord[index].ReqestId

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
    window.location.reload(1)
  }
  render () {
    return (
      // List of leave requests
      <div className='leaveRecord'>
        <table>
          <thead className='thead1'>
            <tr className='thead1'>
              <td className='tdStyle'>EmpId</td>
              <td className='tdStyle'>LeaveType</td>
              <td className='tdStyle'>&nbsp;</td>
            </tr>
          </thead>
          <tbody>
            {this.state.LeaveRecord.map((record, i) => {
              return this.state.deletedRow.indexOf(record.ReqestId) === -1
                ? <tr key={i} className='tdStyle'>
                  <td className='tdStyle'>{record.EmpId}</td>
                  <td className='tdStyle'>{record.LeaveType}</td>
                  <td className='tdStyle'>
                    <NavLink to='/approvals'>
                      <button onClick={e => this.sendReqId(e, i)}>View</button>
                    </NavLink><span>&nbsp;</span>
                    <button onClick={e => this.delete(e, i)}>Delete</button>
                  </td>
                </tr>
                : ''
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default LeaveRequests
