import React, { Component } from "react";
import "./Leaveplan.css";
import moment from "moment";

class LeavePlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Holiday: JSON.parse(localStorage.getItem("Data"))
    };
    this.change = this.change.bind(this);
  }
  change(e, i) {
    var item = {
      value: e.target.value,
      name: e.target.name,
      targetIndex: i
    };
    const newObject = this.state.Holiday.holidayList.map((holiday, j) => {
      for (var key in holiday) {
        if (key == item.name && j == item.targetIndex) {
          holiday[key] = item.value;
        }
      }
      return holiday;
    });
    this.setState({ [this.state.Holiday.holidayList]: newObject });
    localStorage.setItem("Data", JSON.stringify(this.state.Holiday));
  }
  render() {
    var role = localStorage.getItem("currentUserRole");
    if (role === "Employee") {
      return (
        <div className="Leaveplan">
          <table>
            <caption>Holiday List</caption>
            <thead className="thead1">
              <tr className="thead1">
                <td className="tr">Dates</td>
                <td className="tr">days</td>
                <td className="tr">Occasion</td>
              </tr>
            </thead>
            <tbody>
              {this.state.Holiday.holidayList.map((holiday, i) => (
                <tr key={holiday[i]} className="tr">
                  <td className="tr">{holiday.date}</td>
                  <td className="tr">{holiday.day}</td>
                  <td className="tr">{holiday.occasion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return (
        <div className="Leaveplan">
          <table>
            <caption>Holiday List</caption>
            <thead className="thead1">
              <tr className="thead1">
                <td className="tr">Dates</td>
                <td className="tr">days</td>
                <td className="tr">Occasion</td>
              </tr>
            </thead>
            <tbody>
              {this.state.Holiday.holidayList.map((holiday, i) => (
                <tr key={holiday[i]} className="tr">
                  <td className="tr">
                    <textarea name="date" onChange={e => this.change(e, i)}>
                      {holiday.date}
                    </textarea>
                  </td>
                  <td className="tr">
                    <textarea name="day" onChange={e => this.change(e, i)}>
                      {holiday.day}
                    </textarea>
                  </td>
                  <td className="tr">
                    <textarea name="occasion" onChange={e => this.change(e, i)}>
                      {holiday.occasion}
                    </textarea>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
}
export default LeavePlan;
