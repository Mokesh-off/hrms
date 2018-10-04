import React, { Component } from 'react'
import './PendingLeaves.css'

class PendingLeaves extends Component {
  constructor (props) {
    super(props)
    this.state = {
      LeavePolicy: JSON.parse(localStorage.getItem('Data'))
    }
  }

  render () {
    let id = JSON.parse(localStorage.getItem('currentUserId'))
    let emp = this.state.LeavePolicy.Employee[id - 1]
    return (
      //  List of pending leaves for employee
      <div className='leaveRecord'>
        <h2>Pending Leaves</h2>
        <table>
          <thead className='thead1'>
            <tr className='thead1'>
              <td className='tdStyle'>Leaves Type</td>
              <td className='tdStyle'>Leaves pending</td>
            </tr>
          </thead>
          <tbody>

            <tr className='tdStyle' >
              <td className='tdStyle'>Planed Leaves</td>
              <td className='tdStyle'>{emp.PendingLeaves.Planed}</td>
            </tr>

            <tr className='tdStyle'>
              <td className='tdStyle'>Emergency Leaves (LOP)</td>
              <td className='tdStyle'>{emp.PendingLeaves.LOP}</td>
            </tr>

            <tr className='tdStyle'>
              <td className='tdStyle'> Sick Leaves</td>
              <td className='tdStyle'>{emp.PendingLeaves.Sick}</td>
            </tr>

            <tr className='tdStyle'>
              <td className='tdStyle'>Earned Leaves</td>
              <td className='tdStyle'>{emp.PendingLeaves.PriL}</td>
            </tr>

          </tbody>
        </table>
      </div>
    )
  }
}

export default PendingLeaves
