import React, { Component } from "react";
import "./Profile.css";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: JSON.parse(localStorage.getItem("Data"))
    };
    this.change = this.change.bind(this);
  }

  /* --   Onchange Function   -- */

  change(e, i) {
    var item = {
      value: e.target.value,
      name: e.target.name,
      targetIndex: i
    };

    /*--    Storing values in LocalStorage    --*/

    const newObject = this.state.Data.Employee.map((data, j) => {
      for (var key in data) {
        if (key === item.name && j === item.targetIndex) {
          data[key] = item.value;
        }
      }
      return data;
    });
    this.setState({ [this.state.Data.Employee]: newObject });
    localStorage.setItem("Data", JSON.stringify(this.state.Data));
  }

  render() {
    let empId = JSON.parse(localStorage.getItem("currentUserId"));

    return (
      /* --    User Profile   -- */

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
                  {data.Dep} <br />
                  <label>E-mail Id</label>
                  {data.EmailId}
                  <br />
                  <label>Employee Password</label>
                  {data.Password}
                  <br />
                  <label>Employee Contact Number</label>
                  <textarea
                    className="textArea"
                    name="ContactNum"
                    onChange={e => this.change(e, i)}
                  >
                    {data.ContactNum}
                  </textarea>
                  <br />
                  <label>Date of Birth</label>
                  {data.Dob} <br />
                  <label>Date of Joining</label>
                  {data.Doj} <br />
                  <label>Employee Address</label>
                  <textarea
                    className="textArea"
                    name="Address"
                    onChange={e => this.change(e, i)}
                  >
                    {data.Address}
                  </textarea>
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
