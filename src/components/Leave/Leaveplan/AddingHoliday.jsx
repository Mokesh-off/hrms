import React, { Component } from 'react'
import './AddingHoliday.css'

class AddingHoliday extends Component {
  constructor (props) {
    super(props)
    this.state = {
      date: '',
      day: '',
      occasion: ''
    }
    this.change = this.change.bind(this)
    this.validation = this.validation.bind(this)
  }
  change (e) { // set values to the state variable
    this.setState({ [e.target.name]: e.target.value })
  }
  validation () { // validation for the input character
    if (this.state.date === '' && this.state.day === '' && this.state.occasion === '') {
      alert("fields can't be empty")
      return (false)
    }
    if (!this.state.date.match(/^\d{4}-\d{2}-\d{2}$/i)) {
      alert('date need to be in the formet of (yyyy-mm-dd)')
      return (false)
    }
    if (!this.state.day.match(/^[a-zA-Z]+$/i)) {
      alert('day should be specified')
      return (false)
    }
    if (!this.state.occasion.match(/^[a-zA-Z]+$/i)) {
      alert('please specify the Occasion')
      return (false)
    }
  }
  submit () { // To update the value to the local storage
    if (this.validation()) {
      var data = JSON.parse(localStorage.getItem('Data'))
      var holiday = data.holidayList
      if (holiday) {
        holiday[holiday.length] = this.state
        localStorage.setItem('Data', JSON.stringify(data))
      } else {
        data['leaveRequest'] = []
        holiday[holiday.length] = this.state
        localStorage.setItem('Data', JSON.stringify(data))
      }
    } else {
      alert("data were incorrect....can't update the value")
    }
  }
  render () {
    return (
      <div>
        <div>
          <label htmlFor='Date'>Date : </label>
          <input type='text' name='date' onChange={this.change} />
        </div>
        <div>
          <label htmlFor='Day'>Day : </label>
          <input type='text' name='day' onChange={this.change} />
        </div>
        <div>
          <label htmlFor='Occasion'>Occasion : </label>
          <input type='text' name='occasion' onChange={this.change} />
        </div>
        <input type='button' value='submit' className='popUpButton' onClick={this.submit.bind(this)} />
      </div>
    )
  }
}

export default AddingHoliday
