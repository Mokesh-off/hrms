import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { Redirect } from "react-router-dom";
import "./LeavePolicy.css";

// import LeaveList from "../LeaveList/LeaveList";

class LeavePolicy extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  state = {
    clickComponent: null
  };

  onSubmit(e) {
    e.preventDefault();
    console.log(e.currentTarget.id);
    this.setState({ clickComponent: e.currentTarget.id });
  }

  state = {
    isEmployer: true,
    leavePolicyJSON: [
      {
        id: 1,
        Type: "Planned Leave",
        Name: "Casual Leave",
        Days: "7",
        Terms: "7 days for 12 months service"
      },
      {
        id: 2,
        Type: "Leave without pay",
        Name: "Leave without pay",
        Days: "5",
        Terms: "5 days for 12 months service"
      },
      {
        id: 3,
        Type: "SL",
        Name: "Sick Leave",
        Days: "10",
        Terms: "10 days for 12 months service"
      },
      {
        id: 4,
        Type: "Maternity Leave",
        Name: "Maternity Leave",
        Days: "180",
        Terms: "180 days for 12 months service"
      },
      {
        id: 5,
        Type: "Earned Leave or Privilege leave",
        Name: "Earned Leave or Privilege leave",
        Days: "12",
        Terms: "12 days for 12 months service"
      },
      {
        id: 6,
        Type: "National Holiday",
        Name: "National Holiday",
        Days: "3",
        Terms: "3 days for 12 months service"
      },
      {
        id: 7,
        Type: "Paternity leave",
        Name: "Paternity leave",
        Days: "3",
        Terms: "3 days for 12 months service"
      }
    ],
    isOpen: false
  };
  state = {
    isEmployer: false,
    leavePolicyJSON: [
      {
        id: 1,
        Type: "Planned Leave",
        Name: "Casual Leave",
        Days: "7",
        Terms: "7 days for 12 months service"
      },
      {
        id: 2,
        Type: "Leave without pay",
        Name: "Leave without pay",
        Days: "5",
        Terms: "5 days for 12 months service"
      },
      {
        id: 3,
        Type: "SL",
        Name: "Sick Leave",
        Days: "10",
        Terms: "10 days for 12 months service"
      },
      {
        id: 4,
        Type: "Maternity Leave",
        Name: "Maternity Leave",
        Days: "180",
        Terms: "180 days for 12 months service"
      },
      {
        id: 5,
        Type: "Earned Leave or Privilege leave",
        Name: "Earned Leave or Privilege leave",
        Days: "12",
        Terms: "12 days for 12 months service"
      },
      {
        id: 6,
        Type: "National Holiday",
        Name: "National Holiday",
        Days: "3",
        Terms: "3 days for 12 months service"
      },
      {
        id: 7,
        Type: "Paternity leave",
        Name: "Paternity leave",
        Days: "3",
        Terms: "3 days for 12 months service"
      }
    ],
    isOpen: false
  };

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