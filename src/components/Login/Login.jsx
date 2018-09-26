import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import './Login.css'
// import LoginContainer from '../../containers/LoginContainer';
// /home/tringapps/reactApp/hrms/src/containers/LoginContainer.jsx
// import {Store} from '../../Store/Store';

///home/tringapps/reactApp/hrms/src/Store/Store.jsx

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      Submit: false,
      email: '',
      password: '',
      error: '',
      login:[] ,
      currentUserId:''
    }
    
    this.handlePassChange = this.handlePassChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.dismissError = this.dismissError.bind(this)
    this.setCurrentUser=this.setCurrentUser.bind(this)
  };
  
  setCurrentUser(b){
    console.log('b value------'+b);
    this.setState({currentUserId : this.state.currentUserId=b});
    console.log('current user id---------'+this.state.currentUserId);
    localStorage.setItem('currentUserId',JSON.stringify(this.state.currentUserId));
  }


  setNew () {
    this.setState({Submit :this.state.Submit= true });

    var newVar= JSON.parse(localStorage.getItem('Data'));
    console.log('new var:'+JSON.stringify(newVar));
    newVar=newVar.Employee
    newVar.forEach(index => {
      console.log('index value:'+index.EmailId);
            this.state.email === index.EmailId && this.state.password === index.Password 
      && this.setCurrentUser(index.EmpId) && console.log('new console.......')
    });
    // newVar.map((Emp,i)=>
    //   console.log(Emp.Employee.EmailId),
    //   this.state.email === Emp.Employee.EmailId && this.state.password === Emp.Email.Password 
    //   && this.setCurrentUser(Emp.EmpId) && console.log('new console.......')
    // )
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.email) {
      alert("Email is required");
    }

    if (!this.state.password) {
      alert("Password is required");
    }
    
    else if (this.state.email && this.state.password){
         this.setNew.call(this)
    }
  }

  handleEmailChange(evt) {
    this.setState({
      email: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  render () {
    if (this.state.currentUserId!='') {
      return <Redirect to='/dashboard' />
    }
    else{
      return (
        <div>
          <div class="bodylogin"></div>
          <div class="headerlogin">
            <div><span>tring</span>apps</div>
          </div>
          <br />
          <div class="login">
            <form onSubmit={this.handleSubmit}>
              <input type="email" placeholder="Email" data-test="email" value={this.state.email} onChange={this.handleEmailChange} />
              <input type="password" placeholder="Password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />
              <input type="submit" value="Login" data-test="submit"/>
            </form>
            <p><a className="alogin" href="#">Forgot Username or Password?</a></p>
          </div>
      </div> 
      );
    }
   }
  }

export default Login;
