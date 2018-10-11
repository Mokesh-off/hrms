import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './SideNav.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class SideNav extends Component {
  constructor (props) {
    super(props)
    this.state = {
      navFlag: '',
      employeeVisibility: '',
      showButtons: 'sidenavHide',
      cssShape: 'triangle-right',
      HomeCss: '',
      prevState: null,
      currentUserRoleVar: JSON.parse(localStorage.getItem('currentUserRole'))
    }
    this.showButtonsFunction = this.showButtonsFunction.bind(this)
  }

  showButtonsFunction () {
    if (this.state.showButtons === 'sidenavHide') {
      this.setState({
        showButtons: (this.state.showButtons = 'sidenavDisplay sidenav'),
        cssShape: (this.state.cssShape = 'triangle-down')
      })
    } else if (
      this.state.showButtons === 'sidenavDisplay sidenav' ||
      this.state.showButtons === 'sidenavDisplay'
    ) {
      this.setState({
        showButtons: (this.state.showButtons = 'sidenavHide'),
        cssShape: (this.state.cssShape = 'triangle-right')
      })
    }
  }

  componentWillMount () {
    var visibilityVar = JSON.parse(localStorage.getItem('currentUserRole'))
    visibilityVar === 'Employee' &&
      this.setState({
        employeeVisibility: (this.state.employeeVisibility = 'employeeCss')
      })
  }

  componentDidUpdate() {

      if(this.state.currentUserRoleVar==='Employer'){

        ReactDOM.findDOMNode(this.refs.dashboard).style.background = '';
        ReactDOM.findDOMNode(this.refs.leaverequest).style.background = '';
        ReactDOM.findDOMNode(this.refs.leaveRecord).style.background = '';
        ReactDOM.findDOMNode(this.refs.MyLeaves).style.background = '';
        ReactDOM.findDOMNode(this.refs.LeavePolicy).style.background = '';
        ReactDOM.findDOMNode(this.refs.leaveplan).style.background = '';
        ReactDOM.findDOMNode(this.refs.addUser).style.background = '';

        if (window.location.pathname === '/leaveRecords') {
          ReactDOM.findDOMNode(this.refs.leaveRecord).style.background = '#EDEDED';
        } else if (window.location.pathname === '/leaverequest') {
          ReactDOM.findDOMNode(this.refs.leaverequest).style.background = '#EDEDED';
        } else if (window.location.pathname === '/dashboard') {
          ReactDOM.findDOMNode(this.refs.dashboard).style.background = '#EDEDED';
        } else if (window.location.pathname === '/MyLeaves') {
          ReactDOM.findDOMNode(this.refs.MyLeaves).style.background = '#EDEDED';
        } else if (window.location.pathname === '/LeavePolicy') {
          ReactDOM.findDOMNode(this.refs.LeavePolicy).style.background = '#EDEDED';
        } else if (window.location.pathname === '/leaveplan') {
          ReactDOM.findDOMNode(this.refs.leaveplan).style.background = '#EDEDED';
        } else if (window.location.pathname === '/addUser') {
          ReactDOM.findDOMNode(this.refs.addUser).style.background = '#EDEDED';
        }

      }

    else if(this.state.currentUserRoleVar==='Employee'){

      ReactDOM.findDOMNode(this.refs.dashboard).style.background = '';
      ReactDOM.findDOMNode(this.refs.MyLeaves).style.background = '';
      ReactDOM.findDOMNode(this.refs.LeavePolicy).style.background = '';
      ReactDOM.findDOMNode(this.refs.leaveplan).style.background = '';

      if (window.location.pathname === '/dashboard') {
        ReactDOM.findDOMNode(this.refs.dashboard).style.background = '#EDEDED';
      } else if (window.location.pathname === '/MyLeaves') {
        ReactDOM.findDOMNode(this.refs.MyLeaves).style.background = '#EDEDED';
      } else if (window.location.pathname === '/LeavePolicy') {
        ReactDOM.findDOMNode(this.refs.LeavePolicy).style.background = '#EDEDED';
      } else if (window.location.pathname === '/leaveplan') {
        ReactDOM.findDOMNode(this.refs.leaveplan).style.background = '#EDEDED';
      }

    }

  }
  componentDidMount () {
    if (window.location.pathname === '/dashboard') {
      this.setState({
        showButtons: (this.state.showButtons = 'sidenavHide'),
        cssShape: (this.state.cssShape = 'triangle-right')
      })
    } else {
      this.setState({
        showButtons: (this.state.showButtons = 'sidenavDisplay'),
        cssShape: (this.state.cssShape = 'triangle-down')
      })
    }
  }

  render () {
    return (
      <div>
        <Header />
        {
          (this.state.currentUserRoleVar==='Employer') ?
          <div className='sidenav'>

            <Link to='/dashboard'>
              <button ref='dashboard'> Dashboard </button>
            </Link>
            <Link to='/leaverequest'>
              <button ref='leaverequest'> Leave Request </button>
            </Link>
            <Link to='/MyLeaves'>
              <button ref='MyLeaves'> My Leave </button>
            </Link>
            <div id='divider' />
            <Link to='/addUser'>
              <button ref='addUser'> Add User </button>
            </Link>
            <div id='divider' />
            <Link to='/leaveRecords'>
              <button ref='leaveRecord'> Leave Records </button>
            </Link>
            <div id='divider' />
            <Link to='/LeavePolicy'>
              <button ref='LeavePolicy'> Leave Policy </button>
            </Link>
            <div id='divider' />
            <Link to='/leaveplan'>
              <button ref='leaveplan'> Leave plan </button>
            </Link>
            <div id='divider' />
            <Link to='/approveProfile'>
              <button ref='approveProfile'> Approve Profile </button>
            </Link>
            <div id='divider' />
          </div>
          : (
          <div className='sidenav'>
            <Link to='/dashboard'>
              <button ref='dashboard'> Dashboard </button>
            </Link>
            <Link to='/leaverequest'>
              <button ref='leaverequest'> Leave Request </button>
            </Link>
            <Link to='/MyLeaves'>
              <button ref='MyLeaves'> My Leave </button>
            </Link>
            <Link to='/LeavePolicy'>
              <button ref='LeavePolicy'> Leave Policy </button>
            </Link>
            <Link to='/leaveplan'>
              <button ref='leaveplan'> Leave plan </button>
            </Link>
          </div>
        )}

        <Footer />
      </div>
    )
  }
}

export default SideNav
