import React, { Component } from 'react'

class MyLeaves extends Component {
  constructor (props) {
    super(props)
    this.state = {
      LeaveRecord: JSON.parse(localStorage.getItem('Data'))

    }
  }

  render () {
    let id = JSON.parse(localStorage.getItem('currentUserId'))
    console.log('type of==='+typeof(this.state.LeaveRecord.Employee[2].EmpId))
    console.log(typeof(id))
    console.log('type of==='+(this.state.LeaveRecord.Employee[2].EmpId))
    console.log((id))
    // alert(typeof(id))
    if((this.state.LeaveRecord.Employee[2].EmpId)===id){
      console.log('new console')
    }
    return (

      <div className='leaveRecord'>
        <div className='head'><h2>My Leaves </h2></div>
        <div className='myLeave'>
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
                  (record.EmpId === id) ? <tr key={i} className='tdStyle' >
                    <td className='tdStyle'>{record.EmpName}</td>
                    <td className='tdStyle'>{record.LeaveType}</td>
                    <td className='tdStyle'>{record.FromDate.substr(0, 10)}</td>
                    <td className='tdStyle'>{record.ToDate.substr(0, 10)}</td>
                    <td className='tdStyle'>{record.TotalDays}</td>
                    <td className='tdStyle'>{record.status}</td>
                    <td className='tdStyle'>{record.LeaveReason}</td>
                  </tr>
                    : ''
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default MyLeaves
