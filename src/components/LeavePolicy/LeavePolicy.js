import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { Redirect } from "react-router-dom";
import "./LeavePolicy.css";

// import LeaveList from "../LeaveList/LeaveList";

class LeavePolicy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickComponent: null,
      isEmployer: true,
      isOpen: false
  };
    this.onSubmit = this.onSubmit.bind(this);
  }

  

  onSubmit(e) {
    e.preventDefault();
    console.log(e.currentTarget.id);
    this.setState({ clickComponent: e.currentTarget.id });
  }


  render() {
    var data = JSON.parse(localStorage.getItem("Data"));
    // var leavePolicy = JSON.parse(localStorage.getItem("LeavePolicy"));
    let empId = JSON.parse(localStorage.getItem("currentUserId"));
    console.log(empId);
    let role = "";
    data.Employee.map((list, index) => {
      // console.log("Role", list.Role);
      if (list.EmpId === empId) {
        role = list.Role;
      }
    });
    console.log("Role", role);
    // console.log(data);
    // let employee = localStorage.getItem("Employee");
    // console.log(employee);
    // let role = localStorage.getItem("Role");
    // console.log("value", data.Employee);
    if (role === "Employer") {
      return (
        <div className="Policy">
          <h1 className="header">
            <textarea>Leave Policy(2018)</textarea>
          </h1>

          <table id="leavePolicy">
            {" "}
            <thead>
              <tr>
                <th>
                  <textarea>Leave Type</textarea>
                </th>{" "}
                <th>
                  <textarea>Leave Name</textarea>
                </th>
                <th>
                  <textarea>NO.of Days</textarea>
                </th>
                <th>
                  <textarea>Terms</textarea>
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.leavePolicyJSON.map((data, i) => (
                <tr key={data.id}>
                  <td>
                    <textarea>{data.Type}</textarea>
                  </td>
                  <td>
                    <textarea>{data.Name}</textarea>
                  </td>
                  <td>
                    <textarea>{data.Days}</textarea>
                  </td>
                  <td>
                    <textarea>{data.Terms}</textarea>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return (
        <div className="Policy">
          <h1 className="header">Leave Policy(2018)</h1>

          <table id="leavePolicy">
            <thead>
              <tr>
                <th>Leave Type</th>
                <th>Leave Name</th>
                <th>NO.of Days</th>
                <th>Terms</th>
              </tr>
            </thead>

            <tbody>
              {this.state.leavePolicyJSON.map((data, i) => (
                <tr key={data.id}>
                  <td>{data.Type}</td>

                  <td>{data.Name}</td>
                  <td>{data.Days}</td>
                  <td>{data.Terms}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default LeavePolicy;

// <Router>
// <Switch>
//   <Route exact path="/" component={LeavePolicy} />
//   <Route path="/leaveList" component={leaveList} />
// </Switch>
// </Router>

// {this.state.clickComponent !== null ? <LeaveList /> : null}
