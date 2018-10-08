import React, { Component } from "react";
import "./Profile.css";
import Modal from "react-awesome-modal";
// import LeaveDetails from "../LeavePolicy/LeaveDetails";
import EditProfile from "./EditProfile";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: JSON.parse(localStorage.getItem("Data")),
      LeavePolicy: JSON.parse(localStorage.getItem("Data")),
      flag: false,
      image: ""
    };
    // this.change = this.change.bind(this);
  }

  openModalView() {
    this.setState({
      visibleView: true
    });
  }

  closeModalView() {
    this.setState({
      visibleView: false
    });
  }

  // change(e, i) {
  //   var item = {
  //     value: e.target.value,
  //     name: e.target.name,
  //     targetIndex: i
  //   };

  /* --    Storing values in LocalStorage    -- */

  //   const newObject = this.state.Data.Employee.map((data, j) => {
  //     for (var key in data) {
  //       if (key === item.name && j === item.targetIndex) {
  //         data[key] = item.value;
  //       }
  //     }
  //     return data;
  //   });
  //   this.setState({ [this.state.Data.Employee]: newObject });
  //   localStorage.setItem("Data", JSON.stringify(this.state.Data));
  // }

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
                  <div className="userForm">
                    <div className="imageProfile">
                      <img
                        className="profileImage"
                        src={require("../../Assets/images/profile_icon.png")}
                      />
                    </div>
                    <hr />
                    <div>
                      <label className="inputLabel">Employee Id</label>
                      <span className="input">{data.EmpId}</span>
                      <br />
                      <label className="inputLabel">Employee Name</label>
                      <span className="input">{data.EmpName}</span>
                      <br />
                      <label className="inputLabel">Employee Role</label>
                      <span className="input"> {data.Role}</span>
                      <br />
                      <label className="inputLabel">Employee Domain</label>
                      <span className="input">{data.Dep} </span>
                      <br />
                      <label className="inputLabel">E-mail Id</label>
                      <span className="input">{data.EmailId} </span>
                      <br />
                      <label className="inputLabel">Employee Password</label>
                      <span className="input"> {data.Password}</span>
                      <br />
                      <label className="inputLabel">
                        Employee Contact Number
                      </label>
                      <span className="input"> {data.ContactNum}</span>
                      <br />
                      <label className="inputLabel">Date of Birth</label>
                      <span className="input">{data.Dob} </span>
                      <br />
                      <label className="inputLabel">Date of Joining</label>
                      <span className="input"> {data.Doj}</span> <br />
                      <label className="inputLabel">Employee Address</label>
                      <span className="input">{data.Address}</span>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )
          )}
        </form>
        <input
          type="button"
          className="requestProfileEditButton"
          value="Request Profile Change"
          onClick={() => this.openModalView()}
        />
        <Modal
          visible={this.state.visibleView}
          width="700"
          height="400"
          margin-bottom="20"
          color="white"
          onClickAway={() => this.closeModalView()}
        >
          <div id="modalEditProfile">
            <EditProfile />
            <a href="javascript:void(0);" onClick={() => this.closeModalView()}>
              X
            </a>
          </div>
        </Modal>
      </div>
    );
  }
}
