import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import './SideNav.css'

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

  navigation (e, link) {
    if (window.location.pathname !== link) {
      this.setState({ navFlag: link })
    }
  }

  componentWillMount () {
    var visibilityVar = JSON.parse(localStorage.getItem('currentUserRole'))
    visibilityVar === 'Employee' &&
      this.setState({
        employeeVisibility: (this.state.employeeVisibility = 'employeeCss')
      })
  }

  render () {
    if (this.state.navFlag) {
      return <Redirect to={this.state.navFlag} />
    }
    return (
      <div className='sidenav'>
        <button onClick={e => this.navigation(e, '/dashboard')}>Home</button>
        <button onClick={() => this.showButtonsFunction()}>
          <span className={this.state.cssShape} /> Leave
        </button>
        <div className={this.state.showButtons}>
          <Link exact to='/leavelist'>
            <button className={this.state.employeeVisibility}>
              Leave Approval
            </button>
          </Link>
          <Link exact to='/leaverequest'>
            <button >
              Leave Request
            </button>
          </Link>
          <Link exact to='/MyLeaves'>
            <button>My Leave</button>
          </Link>
          <Link to='/leaveRecords'>
            <button className={this.state.employeeVisibility}>
              Leave Records
            </button>
          </Link>
          <Link to='/LeavePolicy'>
            <button>Leave Policy</button>
          </Link>
          <Link to='/leaveplan'>
            <button className={this.state.employeeVisibility}>
              Leave plan
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

export default SideNav
