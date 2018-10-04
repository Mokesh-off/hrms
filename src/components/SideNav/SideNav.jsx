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
      prevState: null
    };
    this.showButtonsFunction = this.showButtonsFunction.bind(this);
  }
  showButtonsFunction() {
    if (this.state.showButtons === 'sidenavHide') {
      this.setState({
        showButtons: (this.state.showButtons = 'sidenavDisplay sidenav'),
        cssShape: (this.state.cssShape = 'triangle-down')
      });
    } else if (
      this.state.showButtons === 'sidenavDisplay sidenav' ||
      this.state.showButtons === 'sidenavDisplay'
    ) {
      this.setState({
        showButtons: (this.state.showButtons = 'sidenavHide'),
        cssShape: (this.state.cssShape = 'triangle-right')
      });
    }
  }

  componentWillMount() {
    var visibilityVar = JSON.parse(localStorage.getItem('currentUserRole'));
    visibilityVar === 'Employee' &&
      this.setState({
        employeeVisibility: (this.state.employeeVisibility = 'employeeCss')
      });
  }

  componentDidUpdate() {
    ReactDOM.findDOMNode(this.refs.dashboard).style.background = '';
    ReactDOM.findDOMNode(this.refs.leaverequest).style.background = '';
    ReactDOM.findDOMNode(this.refs.leaveRecord).style.background = '';
    ReactDOM.findDOMNode(this.refs.leavelist).style.background = '';
    ReactDOM.findDOMNode(this.refs.MyLeaves).style.background = '';
    ReactDOM.findDOMNode(this.refs.LeavePolicy).style.background = '';
    ReactDOM.findDOMNode(this.refs.leaveplan).style.background = '';

    if (window.location.pathname === '/leaveRecords') {
      ReactDOM.findDOMNode(this.refs.leaveRecord).style.background = '#ffe4c4';
    } else if (window.location.pathname === '/leaverequest') {
      ReactDOM.findDOMNode(this.refs.leaverequest).style.background = '#ffe4c4';
    } else if (window.location.pathname === '/dashboard') {
      ReactDOM.findDOMNode(this.refs.dashboard).style.background = '#ffe4c4';
    } else if (window.location.pathname === '/leavelist') {
      ReactDOM.findDOMNode(this.refs.leavelist).style.background = '#ffe4c4';
    } else if (window.location.pathname === '/MyLeaves') {
      ReactDOM.findDOMNode(this.refs.MyLeaves).style.background = '#ffe4c4';
    } else if (window.location.pathname === '/LeavePolicy') {
      ReactDOM.findDOMNode(this.refs.LeavePolicy).style.background = '#ffe4c4';
    } else if (window.location.pathname === '/leaveplan') {
      ReactDOM.findDOMNode(this.refs.leaveplan).style.background = '#ffe4c4';
    }
  }
  componentDidMount() {
    if (window.location.pathname === '/dashboard') {
      this.setState({
        showButtons: (this.state.showButtons = 'sidenavHide'),
        cssShape: (this.state.cssShape = 'triangle-right')
      });
    } else {
      this.setState({
        showButtons: (this.state.showButtons = 'sidenavDisplay'),
        cssShape: (this.state.cssShape = 'triangle-down')
      });
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className='sidenav'>
          <Link to='/dashboard'>
            <button ref='dashboard'>Home</button>
          </Link>

          <button onClick={() => this.showButtonsFunction()}>
            <span className={this.state.cssShape} /> Leave
          </button>

          <div className={this.state.showButtons}>
            <Link to='/leavelist'>
              <button ref='leavelist' className={this.state.employeeVisibility}>
                Leave Approval
              </button>
            </Link>
            <Link to='/leaverequest'>
              <button ref='leaverequest'> Leave Request</button>
            </Link>
            <Link to='/MyLeaves'>
              <button ref='MyLeaves'>My Leave</button>
            </Link>
            <Link to='/leaveRecords'>
              <button
                ref='leaveRecord'
                className={this.state.employeeVisibility + ' '}
              >
                Leave Records
              </button>
            </Link>
            <Link to='/LeavePolicy'>
              <button ref='LeavePolicy'> Leave Policy </button>
            </Link>
            <Link to='/leaveplan'>
              <button
                ref='leaveplan'
              >
                Leave plan
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default SideNav
