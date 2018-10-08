import React, { Component } from "react";
// import Profile from "./Profile";
import "./EditProfile.css";
// import Popup from "reactjs-popup";
export default class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: JSON.parse(localStorage.getItem("Data")),
      //   this.setState({ EdittedData: data.leaveRequest })
      Address: "",
      ContactNum: ""
    };
    this.change = this.change.bind(this);
    this.validation = this.validation.bind(this);
  }
  change(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  validation() {
    if (this.state.Address === "" && this.state.ContactNum === "") {
      this.setState({});
      alert("Fields can't be left empty");

      return false;
    }
    if (!this.state.Address.match(/^[a-zA-Z]+$/i)) {
      this.setState({
        // alert("Please enter the Leave Name");
        // open: true
        // alert("name issue");
      });

      alert("Please enter the updated Address");
      return false;
    }
    if (!this.state.ContactNum.match(/^[0-9]+$/i)) {
      this.setState({});
      alert("Please enter the updated Contact Number");
      return false;
    }

    return true;
  }

  //   sendRequest(e, i) {
  //     localStorage.setItem("EdittedProfile", i);
  //     alert("function is working");
  //   }

  submit(e, i) {
    localStorage.setItem("EdittedProfile", i);
    if (this.validation()) {
      var data = JSON.parse(localStorage.getItem("Data"));
      //   var employee = JSON.parse(localStorage.getItem("Employee"));
      var emp = data.Employee;
      alert("leavePolicy");
      //   console.log("Data");
      if (emp) {
        emp[emp.length] = this.state;
        // console.log(emp.length);
        alert("valid data");
        window.localStorage.setItem("Data", JSON.stringify(data));
      } else {
        data["employee"] = [];
        alert("hh");
        emp[emp.length] = this.state;
        window.localStorage.setItem("Data", JSON.stringify(data));
      }
      alert("Successfully submitted");
      window.location.reload();
      // console.log("alert");
      return true;
    } else {
      this.setState({});
      //   alert("Enter the Valid Data");
    }
  }
  render() {
    let empId = JSON.parse(localStorage.getItem("currentUserId"));
    return (
      <div className="popUpAdd">
        {this.state.Data.Employee.map(
          (data, i) =>
            data.EmpId === empId ? (
              <div key={i}>
                <div className="popUpAddress">
                  <label htmlFor="Address">Employee Current Address</label>
                  {data.Address}
                </div>
                <div className="popUpAddress">
                  <label htmlFor="Address"> Employee Updated Address</label>
                  <input type="text" name="Address" onChange={this.change} />
                </div>
                <div className="popUpAddress">
                  <label htmlFor="Contact Number">
                    Employee Current Contact Number
                  </label>
                  {data.ContactNum}
                </div>
                <div className="popUpAddress">
                  <label htmlFor="Contact Number">
                    Employee Updated Contact Number
                  </label>
                  <input
                    type="number"
                    name="ContactNum"
                    onChange={this.change}
                  />
                </div>

                <input
                  type="button"
                  value="Submit"
                  className="profileEditButton"
                  onClick={this.submit.bind(this)}
                  //   onClick={e => this.sendRequest(e, i)}
                />
              </div>
            ) : (
              ""
            )
        )}
      </div>
    );
  }
}
