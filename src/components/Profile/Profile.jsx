import React, { Component } from "react";
import "./Profile.css";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: JSON.parse(localStorage.getItem("Data"))
    };
  }

  render() {
    // var data = JSON.parse(localStorage.getItem("Data"));
    // var employee = data.Employee;
    // console.log(employee);
    // console.log(this.state.data.Employee.EmpId);

    let empId = JSON.parse(localStorage.getItem("currentUserId"));
    let empName = JSON.parse(localStorage.getItem("currentUserName"));
    console.log(empId);
    console.log(empName);
    // let role = "";
    // data.Employee.map((list, index) => {
    //   console.log(data.Employee.EmpName);
    // console.log("Role", list.Role);
    // if (list.EmpId === empId) {
    //   role = list.Role;
    // }
    // });

    // if (role === "Employer") {
    return (
      <div className="profile">
        <h1 className="UserProfile">User Profile</h1>
        <form className="profileForm">
          {this.state.Data.Employee.map(
            (data, i) =>
              data.EmpId === empId ? (
                <div key={i}>
                  <label>Employee Id</label>
                  {data.EmpId} <br />
                  <label>Employee Name</label>
                  {data.EmpName}
                  <br />
                  <label>Employee Role</label>
                  {data.Role}
                  <br />
                  <label>Employee Domain</label>
                  {data.Dep}
                  <br />
                  <label>E-mail Id</label>
                  {data.EmailId}
                  <br />
                  <label>Employee Password</label>
                  {data.Password}
                  <br />
                  <label>Employee Contact Number</label>
                  {data.ContactNum}
                  <br />
                  <label>Date of Birth</label>
                  {data.Dob}
                  <br />
                  <label>Date of Joining</label>
                  {data.Doj}
                  <br />
                  <label>Employee Address</label>
                  {data.Address}
                </div>
              ) : (
                ""
              )
          )}
        </form>
      </div>
    );
  }
}
// }
