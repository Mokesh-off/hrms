import React, { Component } from 'react'
import './LeaveRecord.css'

class LeaveRecord extends Component {
  constructor (props) {
    super(props)
    this.state = {
      LeaveRecord: JSON.parse(localStorage.getItem('Data'))
    }
  }
  render () {
    return (
      <div className='leaveRecord'>
        <table>
          <thead className='thead1'>
            <tr className='thead1'>
              <td className='tdStyle'>Name</td>
              <td className='tdStyle'>LeaveType</td>
              <td className='tdStyle'>FromDate</td>
              <td className='tdStyle'>ToDate</td>
              <td className='tdStyle'>TotalDays</td>
              <td className='tdStyle'>status</td>
              <td className='tdStyle'>LeaveReason</td>
            </tr>
          </thead>
          <tbody>
            {
              this.state.LeaveRecord.leaveRequest.map((record, i) =>
                <tr key={record[i]} className='tdStyle' >
                  <td className='tdStyle'>{record.EmpName}</td>
                  <td className='tdStyle'>{record.LeaveType}</td>
                  <td className='tdStyle'>{record.FromDate.substr(0, 10)}</td>
                  <td className='tdStyle'>{record.ToDate.substr(0, 10)}</td>
                  <td className='tdStyle'>{record.TotalDays}</td>
                  <td className='tdStyle'>{(record.status===''||null)?'On progress':record.status}</td>
                  <td className='tdStyle'>{record.LeaveReason}</td>
                </tr>)
            }
          </tbody>
        </table>
      </div>
    )
  }
}
export default LeaveRecord
