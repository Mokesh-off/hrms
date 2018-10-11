import React, { Component } from 'react';
import './EditProfileApproval.css';
import { NavLink } from 'react-router-dom';

class EditProfileApproval extends Component {
  constructor (props) {
    super(props)
    this.state = {
      EmpId: '',
      EmpName: '',
      ContactNum: '',
      Address: '',
      EditProfile: JSON.parse(localStorage.getItem('Data'))
    }
  }

  /* --------Rejects the changes to be updated in User Profile -------- */

  changeToReject (e, i) {
    let newState = Object.assign({}, this.state)
    let index = i
    newState.EditProfile.edittedProfile[index].status = 'Rejected';
    window.localStorage.setItem('Data', JSON.stringify(this.state.EditProfile))
    this.setState({ open: true })
    this.setState({ status: 'Rejected' })
  }

  /* -------Approves the changes to be updated in User Profile -------- */

  changeToApprove (e, i) {
    let newState = Object.assign({}, this.state)
    let index = i
    newState.EditProfile.edittedProfile[index].status = 'Approved';
    window.localStorage.setItem('Data', JSON.stringify(this.state.EditProfile))
    this.setState({ open: true })
    this.setState({ status: 'Approved' })
    var empId = this.state.EditProfile.edittedProfile[index].EmpId
    var newAddress = this.state.EditProfile.edittedProfile[index].Address
    var newContact = this.state.EditProfile.edittedProfile[index].ContactNum
    this.updateData(empId, newAddress, newContact)
  }

  /* --------Updates the changes to be updated in User Profile -------- */

  updateData (empId, newAddress, newContact) {
    let newState = Object.assign({}, this.state)
    var data = this.state.EditProfile.Employee
    var newEmpId = parseInt(empId)
    for (var i = 0; i < data.length; ++i) {
      if (data[i].EmpId == empId) {
        newState.EditProfile.Employee[i].ContactNum = newContact
        newState.EditProfile.Employee[i].Address = newAddress
      }
    }
    window.localStorage.setItem('Data', JSON.stringify(this.state.EditProfile))
  }

  render () {
    let empId = JSON.parse(localStorage.getItem('currentUserId'))
    var data1 = JSON.parse(window.localStorage.getItem('Data'))
    data1 = data1.edittedProfile
    if(!localStorage.getItem('currentUserId'))
    {
    return(
     window.location.replace('/')
    )
    }
    else{
    return (
      <div className='editProfileApproval'>
        <div className='editProfile'>
          <table>
            <thead className='thead1'>
              <tr className='thead1'>
                <td className='tdStyle'>Employee Id</td>
                <td className='tdStyle'>Employee Name</td>
                <td className='tdStyle'>Address</td>
                <td className='tdStyle'>Contact Number</td>
                <td className='tdStyle'>Option</td>
              </tr>
            </thead>
            <tbody>
              {this.state.EditProfile.edittedProfile.map((data, i) => {
                return (
                  <tr key={i}>
                    <td>{data.EmpId}</td>
                    <td>{data.EmpName}</td>
                    <td>{data.Address}</td>
                    <td>{data.ContactNum}</td>
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
                )
              })}
            </tbody>
          </table>
          <br />
          <div className='backButton'>
            <NavLink to='/profile'>
              <button>Back</button>
            </NavLink>
          </div>
        </div>
      </div>
    )
            }
  }
}
export default EditProfileApproval
