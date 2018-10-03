import React, { Component } from 'react'
import './Leaveplan.css'
<<<<<<< HEAD
import moment from 'moment'
=======
import Popup from 'reactjs-popup'
import AddingHoliday from './AddingHoliday'
>>>>>>> develop

class LeavePlan extends Component {
  constructor (props) {
    super(props)
    this.state = {
      Holiday: JSON.parse(localStorage.getItem('Data'))
    }
    this.change = this.change.bind(this)
  }
<<<<<<< HEAD
  change (e, i) {
=======
  change (e, i) { // To Update the value to the Local Storage
>>>>>>> develop
    var item = {
      // Created an obj for the target value
      value: e.target.value,
      name: e.target.name,
      targetIndex: i
    }
    const newObject = this.state.Holiday.holidayList.map((holiday, j) => {
      for (var key in holiday) {
<<<<<<< HEAD
        if (key == item.name && j == item.targetIndex) {

=======
        // Check the target value and item name is same
        if (key === item.name && j === item.targetIndex) {
>>>>>>> develop
          holiday[key] = item.value
        }
      }
      return holiday
    })
<<<<<<< HEAD
=======
    // To append the value to the Local storage
>>>>>>> develop
    this.setState({ [this.state.Holiday.holidayList]: newObject })
    localStorage.setItem('Data', JSON.stringify(this.state.Holiday))
  }
  render () {
<<<<<<< HEAD
    var role = localStorage.getItem('currentUserRole')
=======
    var role = JSON.parse(localStorage.getItem('currentUserRole'))
    // According to the role the view will be different
>>>>>>> develop
    if (role === 'Employee') {
      return (
        <div className='Leaveplan'>
          <table>
<<<<<<< HEAD
            <caption>Holiday List</caption>
=======
            <caption className='caption' >Holiday List</caption>
>>>>>>> develop
            <thead className='thead1'>
              <tr className='thead1'>
                <td className='tr'>Dates</td>
                <td className='tr'>days</td>
                <td className='tr'>Occasion</td>
              </tr>
            </thead>
            <tbody>
              {
                this.state.Holiday.holidayList.map((holiday, i) =>
                  <tr key={holiday[i]} className='tr'>
                    <td className='tr'>{holiday.date}</td>
                    <td className='tr'>{holiday.day}</td>
                    <td className='tr'>{holiday.occasion}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      )
    } else {
      return (
        <div className='Leaveplan'>
          <table>
            <caption>Holiday List</caption>
            <thead className='thead1'>
              <tr className='thead1'>
                <td className='tr'>Dates</td>
                <td className='tr'>days</td>
                <td className='tr'>Occasion</td>
              </tr>
            </thead>
            <tbody>
              {
                this.state.Holiday.holidayList.map((holiday, i) =>
                  <tr key={holiday[i]} className='tr'>
                    <td className='tr' >
<<<<<<< HEAD
                      <textarea name='date'
=======
                      <textarea name='date' className='textarea'
>>>>>>> develop
                        onChange={e => this.change(e, i)}>
                        {holiday.date}
                      </textarea>
                    </td>
                    <td className='tr' >
<<<<<<< HEAD
                      <textarea name='day'
                        onChange= {e => this.change(e, i)}>
=======
                      <textarea name='day' className='textarea'
                        onChange={e => this.change(e, i)}>
>>>>>>> develop
                        {holiday.day}
                      </textarea>
                    </td>
                    <td className='tr' >
<<<<<<< HEAD
                      <textarea name='occasion'
                        onChange ={e => this.change(e, i)}>
=======
                      <textarea name='occasion' className='textarea'
                        onChange={e => this.change(e, i)}>
>>>>>>> develop
                        {holiday.occasion}
                      </textarea>
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
          <Popup trigger={<button className='popUpButton' >Add</button>} modal>
            {
              close => (
                <div id='sec'>
                  <AddingHoliday />
                </div>
              )
            }
          </Popup>
        </div>
      )
    }
  }
}
export default LeavePlan
