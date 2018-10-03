import React, { Component } from 'react'
import './LeavePolicy.css'

class LeavePolicy extends Component {
  constructor (props) {
    super(props)
    this.state = {
      clickComponent: null,
      isEmployer: true,
      isOpen: false
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit (e) {
    e.preventDefault()
    this.setState({ clickComponent: e.currentTarget.id })
  }

  render () {
    var data = JSON.parse(localStorage.getItem('Data'))
    let empId = JSON.parse(localStorage.getItem('currentUserId'))
    let role = '';
    data.Employee.map((list, index) => {
      if (list.EmpId === empId) {
        role = list.Role
      }
    })
    if (role === 'Employer') {
      return (
        <div className='policy'>
          <h1 className='headerLeavePolicy'>
            <textarea>Leave Policy(2018)</textarea>
          </h1>

          <table id='leavePolicy'>
            <thead>
              <tr className='thead1'>
                <th className='tdStyle'> Leave Type</th>
                <th className='tdStyle'>Leave Name</th>
                <th className='tdStyle'>NO.of Days</th>
                <th className='tdStyle'>Terms</th>
              </tr>
            </thead>
            <tbody>
              {this.state.leavePolicyJSON.map((data, i) => (
                <tr key={data.id}>
                  <td className='tdStyle'>
                    <textarea className='tdStyle'>{data.Type}</textarea>
                  </td>
                  <td className='tdStyle'>
                    <textarea className='tdStyle'>{data.Name}</textarea>
                  </td>
                  <td className='tdStyle'>
                    <textarea className='tdStyle'>{data.Days}</textarea>
                  </td>
                  <td className='tdStyle'>
                    <textarea className='tdStyle'>{data.Terms}</textarea>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    } else {
      return (
        <div className='policy'>
          <h1 className='header'>Leave Policy(2018)</h1>

          <table id='leavePolicy'>
            <thead>
              <tr className='thead1'>
                <th className='tdStyle'>Leave Type</th>
                <th className='tdStyle'>Leave Name</th>
                <th className='tdStyle'>NO.of Days</th>
                <th className='tdStyle'>Terms</th>
              </tr>
            </thead>

            <tbody>
              {this.state.leavePolicyJSON.map((data, i) => (
                <tr key={data.id}>
                  <td className='tdStyle'>{data.Type}</td>

                  <td className='tdStyle'> {data.Name}</td>
                  <td className='tdStyle'>{data.Days}</td>
                  <td className='tdStyle'>{data.Terms}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    }
  }
}

export default LeavePolicy
