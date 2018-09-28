import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import './Login.css'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      Submit: false,
      email: '',
      password: '',
      error: '',
      login:[] ,
      currentUserId:'',
      currentUserRole:'',
      currentUserName:''
    }
    
    this.handlePassChange = this.handlePassChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.dismissError = this.dismissError.bind(this)
    this.setCurrentUser=this.setCurrentUser.bind(this)
  };
  
  setCurrentUser(userId,userRole,userName){
    this.setState({currentUserId : this.state.currentUserId=userId});
    this.setState({currentUserRole : this.state.currentUserRole=userRole});
    this.setState({currentUserName : this.state.currentUserName=userName});
    localStorage.setItem('currentUserId',JSON.stringify(this.state.currentUserId));
    localStorage.setItem('currentUserRole',JSON.stringify(this.state.currentUserRole));
    localStorage.setItem('currentUserName',JSON.stringify(this.state.currentUserName));
  }


  setNew () {
    this.setState({Submit :this.state.Submit= true });
    var newVar= JSON.parse(localStorage.getItem('Data'));
    newVar=newVar.Employee
    newVar.forEach(index => {
            this.state.email === index.EmailId && this.state.password === index.Password 
      && this.setCurrentUser(index.EmpId,index.Role,index.EmpName)
    });
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
    if(JSON.parse(localStorage.getItem('currentUserId'))!==null){
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
          </div>
      </div> 
      );
    }
   }
  }

export default Login;
