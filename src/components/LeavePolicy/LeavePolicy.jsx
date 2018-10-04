import React, { Component } from "react";
import "./LeavePolicy.css";
import Modal from "react-awesome-modal";
import LeaveDetails from "./LeaveDetails";
class LeavePolicy extends Component {
  constructor (props) {
    super(props)
    this.state = {
      LeavePolicy: JSON.parse(localStorage.getItem('Data'))
    }
    this.change = this.change.bind(this)
  }

  openModal() {
    this.setState({
      visible: true
    });
  }

  closeModal() {
    this.setState({
      visible: false
    });
  }

  /* --   Onchange Function   -- */

  change (e, i) {
    var item = {
      value: e.target.value,
      name: e.target.name,
      targetIndex: i
    }

    /* --   Storing values in LocalStorage   -- */

    const newObject = this.state.LeavePolicy.leavePolicyJSON.map(
      (leavePolicy, j) => {
        for (var key in leavePolicy) {
          if (key === item.name && j === item.targetIndex) {
            leavePolicy[key] = item.value
          }
        }
        return leavePolicy
      }
    )
    this.setState({ [this.state.LeavePolicy.leavePolicyJSON]: newObject })
    localStorage.setItem('Data', JSON.stringify(this.state.LeavePolicy))
  }
  render () {
    var data = JSON.parse(localStorage.getItem('Data'))
    let empId = JSON.parse(localStorage.getItem('currentUserId'))
    let role = ''
    data.Employee.map((list, index) => {
      if (list.EmpId === empId) {
        role = list.Role
      }
    })

    /* --   Employer Execution part    -- */

    if (role === 'Employer') {
      return (
        <div className='policy'>
          <h1 className='headerLeavePolicy'>Leave Policy(2018)</h1>

          <table id='leavePolicy'>
            <thead>
              <tr className="thead1">
                <th className="tdStyle"> Leave Type</th>
                <th className="tdStyle">Leave Name</th>
                <th className="tdStyle">NO.of Days</th>
                <th className="tdStyle">Terms</th>
                <th className="tdStyle">Details</th>
              </tr>
            </thead>
            <tbody>
              {this.state.LeavePolicy.leavePolicyJSON.map((data, i) => (
                <tr key={data.id}>
                  <td className='tdStyle'>
                    <textarea
                      className='tdStyle'
                      name='Type'
                      onChange={e => this.change(e, i)}
                    >
                      {data.Type}
                    </textarea>
                  </td>
                  <td className='tdStyle'>
                    <textarea
                      className='tdStyle'
                      name='Name'
                      onChange={e => this.change(e, i)}
                    >
                      {data.Name}
                    </textarea>
                  </td>
                  <td className='tdStyle'>
                    <textarea
                      className='tdStyle'
                      name='Days'
                      onChange={e => this.change(e, i)}
                    >
                      {data.Days}
                    </textarea>
                  </td>
                  <td className='tdStyle'>
                    <textarea
                      className='tdStyle'
                      name='Terms'
                      onChange={e => this.change(e, i)}
                    >
                      {data.Terms}
                    </textarea>
                  </td>
                  <td className="tdStyle">
                    <input
                      type="button"
                      value="view"
                      onClick={() => this.openModal()}
                    />
                    <Modal
                      visible={this.state.visible}
                      width="800"
                      height="500"
                      margin-bottom="20"
                      color="white"
                      onClickAway={() => this.closeModal()}
                    >
                      <div id="modal">
                        <LeaveDetails />
                        <a
                          href="javascript:void(0);"
                          onClick={() => this.closeModal()}
                        >
                          Close
                        </a>
                      </div>
                    </Modal>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    } else {
      /* --    Employee Execution part    -- */

      return (
        <div className='policy'>
          <h1 className='header'>Leave Policy(2018)</h1>
          <table id='leavePolicy'>
            <thead>
              <tr className="thead1">
                <th className="tdStyle">Leave Type</th>
                <th className="tdStyle">Leave Name</th>
                <th className="tdStyle">NO.of Days</th>
                <th className="tdStyle">Terms</th>
                <th className="tdStyle">Details</th>
              </tr>
            </thead>
            <tbody>
              {this.state.LeavePolicy.leavePolicyJSON.map((data, i) => (
                <tr key={data.id}>
                  <td className="tdStyle">{data.Type}</td>
                  <td className="tdStyle"> {data.Name}</td>
                  <td className="tdStyle">{data.Days}</td>
                  <td className="tdStyle">{data.Terms}</td>
                  <td className="tdStyle">
                    <input
                      type="button"
                      value="view"
                      onClick={() => this.openModal()}
                    />
                    <Modal
                      visible={this.state.visible}
                      width="800"
                      height="500"
                      margin-bottom="20"
                      color="white"
                      onClickAway={() => this.closeModal()}
                    >
                      <div id="modal">
                        <LeaveDetails />
                        <a
                          href="javascript:void(0);"
                          onClick={() => this.closeModal()}
                        >
                          Close
                        </a>
                      </div>
                    </Modal>
                  </td>
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
