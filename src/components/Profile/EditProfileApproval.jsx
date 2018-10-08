import React, { Component } from "react";
import "./LeaveApproval.css";
import { NavLink } from "react-router-dom";
import Popup from "reactjs-popup";
class LeaveApproval extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      status: "",
      EditProfile: JSON.parse(localStorage.getItem("Data")),
      pending: "",
      comment: ""
    };
  }

  closePopup(e) {
    this.setState({ open: false });
  }

  changeToReject(e) {
    let newState = Object.assign({}, this.state);
    console.log(newState);
    let index = window.localStorage.getItem("EdittedProfile");
    newState.EditProfile.profileEditted[index].status = "Rejected";
    window.localStorage.setItem("Data", JSON.stringify(this.state.EditProfile));
    this.setState({ open: true });
    this.setState({ status: "Rejected" });
  }

  changeToApprove(e) {
    let newState = Object.assign({}, this.state);
    console.log(newState);
    let index = window.localStorage.getItem("EdittedProfile");
    newState.EditProfile.profileEditted[index].status = "Approved";
    window.localStorage.setItem("Data", JSON.stringify(this.state.EditProfile));
    this.setState({ open: true });
    this.setState({ status: "Approved" });
    this.reduceLeaves(index);
  }

  render() {
    let index = window.localStorage.getItem("EdittedProfile");
    return (
      // Details of leave request
      <div className="editProfile">
        <table>
          <thead className="thead1">
            <tr className="thead1">
              <td className="tdStyle">EmpId</td>
              <td className="tdStyle">Address</td>
              <td className="tdStyle">Contact Number</td>

              <td className="tdStyle">Option</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tdStyle">
                {this.state.EditProfile.profileEditted[index].EmpId}
              </td>
              <td className="tdStyle">
                {this.state.EditProfile.profileEditted[index].Address}
              </td>
              <td className="tdStyle">
                {this.state.EditProfile.profileEditted[index].ContactNum}
              </td>

              <td className="tdStyle">
                <button
                  className="RejectButton"
                  onClick={e => this.changeToReject(e)}
                >
                  Reject
                </button>
                <span>&nbsp;</span>
                <button
                  className="ApproveButton"
                  onClick={e => this.changeToApprove(e)}
                >
                  Approve
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <div className="backButton">
          <NavLink to="/profile">
            <button>Back</button>
          </NavLink>
        </div>
      </div>
    );
  }
}
export default LeaveApproval;
