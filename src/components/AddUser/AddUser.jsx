import './AddUser.css'
import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import ReactDOM from 'react-dom'

class AddUser extends Component {
  constructor (props) {
    super(props)
    this.state = {
      EmpName: '',
      Dob: '',
      Doj: '',
      wl: '',
      gender: '',
      EmailId: '',
      ContactNum: '',
      Dep: '',
      Password: 'tringapps',
      validation: false,
      Role: '',
      EmpId: '',
      empty: '',
      errname: '',
      nameborder: '',
      errmail: '',
      mailborder: '',
      errnum: '',
      numborder: '',
      Address: '',
      PendingLeaves: {
        Planned: 10,
        EmergencyLeave: 10,
        Sick: 10,
        Privilege: 10
      }
    }
    this.onSubmit = this.onSubmit.bind(this)
  }
  change (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  reset () {
    window.location.assign('/addUser')
  }

  validate () {
    this.setState({
      empty: '',
      errname: '',
      nameborder: '',
      errmail: '',
      mailborder: '',
      errnum: '',
      numborder: ''
    })
    if (this.state.EmpName === '' || this.state.EmpId === '' ||
    this.state.gender === '' || this.state.Dob === '' ||
    this.state.gender === '' || this.state.EmailId === '' ||
    this.state.ContactNum === '' || this.state.Dep === '' ||
    this.state.Role === '' || this.state.Doj === '' ||
    this.state.wl === '' || this.state.Address === '') {
      this.setState({ empty: 'Fields can not be empty ' })
      return false
    }
    if ((/^[a-zA-Z ]+$/.test(this.state.EmpName)) === false) {
      this.setState({ errname: 'Only characters', nameborder: '1px solid red' })
      return false
    }
    if (/^[a-zA-Z0-9_\-.]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$/
      .test(this.state.EmailId) === false) {
        this.setState({ errmail: 'Need to have "@" and "."', mailborder:'1px solid red' })
      return false
    }
    if (/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/
      .test(this.state.ContactNum) === false) {
        this.setState({ errnum: 'only number', numborder: '1px solid red' })
      return false
    }
    return true
  }

  onSubmit (e) {
    e.preventDefault()
    if (this.validate()) {
      this.setState({ validation: true })
      var Data = JSON.parse(window.localStorage.getItem('Data'))

      if (Data.Employee) {
        Data.Employee[Data.Employee.length] = this.state
        window.localStorage.setItem('Data', JSON.stringify(Data))
        alert('New user added')
      } else {
        Data['Employee'] = []
        Data.Employee[Data.Employee.length] = this.state
        window.localStorage.setItem('Data', JSON.stringify(Data))
        alert('New user added')
      }
    }
  };

  render () {
    if(!localStorage.getItem('currentUserId'))
    {
    return(
     window.location.replace('/')
    )
    }
    else{
    
    return (
      <div id='addUserContainer'>

        <div className='addUserMainContainer'>
          <div className='formContainer'>
            <div className='form'>
              <h1>Employee registration form</h1>
              <div className='divider' />
              <div className='err'>{this.state.empty}</div>
              <div className='row'>
                <div className='left'>Employee ID:</div>
                <div className='right'>
                  <input className='box' type='number' name='EmpId'
                    placeholder='Employee ID..'
                    onChange={e => this.change(e)} />
                </div>
              </div>

              <div className='row'>
                <div className='left'>Name:</div>
                <div className='right'>
                  <input className='box' type='text' name='EmpName'
                    placeholder='Employee name...' style={{ border: this.state.nameborder }}
                    onChange={e => this.change(e)} />
                </div>
                <div className='err'>{this.state.errname}</div>
              </div>

              <div className='row'>
                <div className='left'>E-mail:</div>
                <div className='right'><input className='box'
                  type='EmailId' name='EmailId' style={{ border: this.state.mailborder }}
                  onChange={e => this.change(e)} /></div>
                <div className='err'>{this.state.errmail}</div>
              </div>

              <div className='row'>
                <div className='left'>Role:</div>
                <div className='right'>
                  {/* <input className='box' list='Role'name='Role'
                onChange={e=>this.change(e)} /> */}
                  <select id='Role' list='Role'name='Role'
                    value={this.state.Role}
                    onChange={e => this.change(e)}>
                    <option value='' disabled> select your option </option>
                    <option value='Employee'> Employee </option>
                    <option value='Employer'> Employer </option>
                  </select>
                </div>
              </div>

              <div className='row'>
                <div className='left'>ContactNum:</div>
                <div className='right'><input className='box' type='number' name='ContactNum'
                  onChange={e => this.change(e)} style={{ border: this.state.numborder }} /></div>
                <div className='err'>{this.state.errnum}</div>
              </div>

              <div className='row'>
                <div className='left'>Dob:</div>
                <div className='right'><input className='box' type='date'
                  name='Dob'
                  onChange={e => this.change(e)} required /></div>
              </div>

              <div className='row'>
                <div className='left'>Gender:</div>
                <div className='right'>
                  <input type='radio' className='radio' name='gender' value='male'
                    onChange={e => this.change(e)} ref='male' />Male
                  <input type='radio' className='radio' name='gender' value='female'
                    onChange={e => this.change(e)} ref='female' />Female
                </div>
              </div>

              <div className='row'>
                <div className='left'>Department:</div>
                <div className='right'>
                  {/* <input className='box' list='Dep' name='Dep'
                onChange={e=>this.change(e)} /> */}
                  <select id='Dep' list='Dep' name='Dep' value={this.state.Dep}
                    onChange={e => this.change(e)} >
                    <option value='' disabled> select your option </option>
                    <option value='WEB'> WEB </option>
                    <option value='ANDROID'> ANDROID </option>
                    <option value='TESTING'> TESTING </option>
                    <option value='ROKU'> ROKU </option>
                  </select>
                </div>
              </div>

              <div className='row'>
                <div className='left'>Date of Joining:</div>
                <div className='right'><input className='box' type='date'
                  name='Doj'
                  onChange={e => this.change(e)} required /></div>
              </div>

              <div className='row'>
                <div className='left'>Working location:</div>
                <div className='right'>
                  <select id='wl' list='wl'name='wl' value={this.state.wl}
                    onChange={e => this.change(e)} >
                    <option value='' disabled> select your option </option>
                    <option value='Chennai'>Chennai</option>
                    <option value='New Jersey'>New Jersey</option>
                    <option value='California'>California</option>
                    <option value='New york'>New york</option>
                  </select>
                </div>
              </div>

              <div className='row'>
                <div className='left'>Address:</div>
                <div className='right'>
                  <textarea className='box' name='Address' onChange={e => this.change(e)} />
                </div>
              </div>

              <div className='row'>
                <div className='left' />
                <div className='err'>{this.state.empty}</div>
                <div className='rowSeven'>
                  <div className='right'><button className='rowSevenButton'
                    onClick={this.reset}> Reset
                  </button></div>
                  <div className='right'><button className='rowSevenButton'
                    onClick={this.onSubmit}>Submit</button></div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    )
    }
  }
}
export default AddUser
