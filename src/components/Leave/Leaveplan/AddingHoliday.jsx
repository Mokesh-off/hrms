import React, { Component } from "react";
import "./AddingHoliday.css";
import Popup from "reactjs-popup";
class AddingHoliday extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      day: "",
      occasion: "",
      open: "",
      errText: ""
    };
    this.change = this.change.bind(this);
    this.validation = this.validation.bind(this);
  }
  change(e) {
    // set values to the state variable
    this.setState({ [e.target.name]: e.target.value });
  }
  validation() {
    // validation for the input character
    if (
      this.state.date === "" &&
      this.state.day === "" &&
      this.state.occasion === ""
    ) {
      this.setState({ open: true, errText: "fields can not be empty" });
      //alert("fields can't be empty")
      return false;
    }
    if (!this.state.date.match(/^\d{4}-\d{2}-\d{2}$/i)) {
      this.setState({
        open: true,
        errText: "date need to be in the formet of (yyyy-mm-dd)"
      });
      //alert('date need to be in the formet of (yyyy-mm-dd)')
      return false;
    }
    if (!this.state.day.match(/^[a-zA-Z]+$/i)) {
      this.setState({ open: true, errText: "day should be specified" });
      //alert('day should be specified')
      return false;
    }
    if (!this.state.occasion.match(/^[a-zA-Z]+$/i)) {
      this.setState({ open: true, errText: "please specify the Occasion" });
      //alert('please specify the Occasion')
      return false;
    }
    return (true)
  }
  closeModal(e) {
    this.setState({ open: false });
  }

  submit() {
    // To update the value to the local storage
    if (this.validation()) {
      var data = JSON.parse(localStorage.getItem("Data"));
      var holiday = data.holidayList;
      if (holiday) {
        holiday[holiday.length] = this.state;
        localStorage.setItem("Data", JSON.stringify(data));
      } else {
        data["leaveRequest"] = [];
        holiday[holiday.length] = this.state;
        localStorage.setItem("Data", JSON.stringify(data));
      }
      this.setState({ open: true, errText:'Successfully submitted'})
    } else {
      this.setState({
        open: true,
        errText: "data were incorrect....can not update the value"
      });
      //alert("data were incorrect....can't update the value")
    }
  }
  render() {
    return (
      <div>
        <div>
          <label htmlFor="Date">Date : </label>
          <input type="text" name="date" onChange={this.change} />
        </div>
        <div>
          <label htmlFor="Day">Day : </label>
          <input type="text" name="day" onChange={this.change} />
        </div>
        <div>
          <label htmlFor="Occasion">Occasion : </label>
          <input type="text" name="occasion" onChange={this.change} />
        </div>
        <input
          type="button"
          value="submit"
          className="popUpButton"
          onClick={this.submit.bind(this)}
        />

        <Popup open={this.state.open}>
          <div className="modal">
            <a className="close" onClick={e => this.closeModal(e)}>
              &times;
            </a>
            {this.state.errText}
          </div>
        </Popup>
      </div>
    );
  }
}

export default AddingHoliday;
