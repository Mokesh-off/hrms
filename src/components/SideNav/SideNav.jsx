import React, { Component } from 'react'
import './SideNav.css'
import { Redirect } from 'react-router-dom'

class SideNav extends Component {
  constructor (props) {
    super(props)
    this.state = {
      navFlag: '',
      employeeVisibility: '',
      showButtons: 'sidenavHide',
      cssShape: 'triangle-right'
    }
    this.navigation = this.navigation.bind(this)
    this.showButtonsFunction = this.showButtonsFunction.bind(this)
  }
  showButtonsFunction () {
    if (this.state.showButtons === 'sidenavHide') {
      this.setState(
        { showButtons: this.state.showButtons = 'sidenavDisplay sidenav',
          cssShape: this.state.cssShape = 'triangle-down' }

      )
    } else if (this.state.showButtons === 'sidenavDisplay sidenav') {
      this.setState(
        { showButtons: this.state.showButtons = 'sidenavHide',
          cssShape: this.state.cssShape = 'triangle-right' }
      )
    }
  }
  componentWillMount () {
    var visibilityVar = JSON.parse(localStorage.getItem('currentUserRole'))
    visibilityVar === 'Employee' &&
      this.setState({
        employeeVisibility: (this.state.employeeVisibility = 'employeeCss')
      })

    this.navigation = this.navigation.bind(this)
  }

  navigation (e, link) {
    if (window.location.pathname !== link) {
      this.setState({ navFlag: link })
    }
  }

  render () {
    if (this.state.navFlag) {
      return <Redirect to={this.state.navFlag} />
    }
    return (
      <div className='sidenav'>
        <button onClick={e => this.navigation(e, '/dashboard')}>Home</button>
        <button onClick={() => this.showButtonsFunction()}>
          <span className={this.state.cssShape} /> Leave</button>
        <div className={this.state.showButtons} >
          <button className={this.state.employeeVisibility}
            onClick={e => this.navigation(e, '/leavelist')}>Leave Approval</button>

          <button onClick={e => this.navigation(e, '/leaverequest')}> Leave Request</button>
          <button onClick={e => this.navigation(e, '/myLeaves')}>My Leave</button>
          <button className={this.state.employeeVisibility}
            onClick={e => this.navigation(e, '/leaveRecords')}>Leave Records
          </button>
          <button onClick={this.props.onSubmit} id='LeavePolicy'>Leave Policy</button>
          <button onClick={e => this.navigation(e, '/leavePlan')}>Leave plan
          </button>
        </div>
      </div>
    )
  }
}

export default SideNav
