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
    }
    this.setNew = this.setNew.bind(this)

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  };

  setNew () {
    this.setState({ Submit: this.state.Submit = true })
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
        //alert("Login Successfull");
        this.setNew();
        console.log(this.state.Submit);
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

    if (this.state.Submit) {
      console.log('dashboard');
      return <Redirect to='/dashboard' />
    }


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
export default Login;
