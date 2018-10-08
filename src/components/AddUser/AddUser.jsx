import './AddUser.css'
import React, { Component } from 'react'
import { Link , Redirect} from 'react-router-dom';
import ReactDOM from 'react-dom';

class AddUser extends Component {

  constructor (props) {
    super(props)
    this.state= {
      EmpName:'',
      Dob:'',
      doj:'',
      wl:'',
      gender:'',
      EmailId:'',
      ContactNum:'',
      department:'',
      Password:'tringapps',
      validation:false,
      Role:'',
      EmpId:'',
      Address:'',
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
      [e.target.name]:e.target.value
    });
  };
  reset(){
    console.log('reset called')
    window.location.assign('/addUser');
  }

  validate () { 
    if(this.state.EmpName === ''|| this.state.EmpId ===''
    || this.state.gender ==='' || this.state.Dob ==='' 
    || this.state.gender ==='' || this.state.EmailId ==='' 
    || this.state.ContactNum ==='' || this.state.department ==='')
    {
      alert('fields cannot be empty');
      return false;
    }
    if( (/^[a-zA-Z ]+$/.test(this.state.EmpName))===false){
      alert('name is invalid');
      return false;
    }
    if(/^[a-zA-Z0-9_\-.]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$/.
    test(this.state.EmailId)===false){
      alert('EmailId is invalid');
      return false;
    }
    if(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/.
    test(this.state.ContactNum)===false){
      alert('ContactNum is invalid');
      return false;
    }
    return true;
  }
  
  onSubmit (e) {
    
    e.preventDefault()
    if(this.validate()){

      this.setState({validation : true});
      var Data= JSON.parse(window.localStorage.getItem('Data'))
     
      if(Data.Employee){
        Data.Employee[Data.Employee.length]=this.state;
        window.localStorage.setItem('Data',JSON.stringify(Data))
        console.log('new Employee added')
        alert('New user added')        
      }
      else{
        Data['Employee']=[]
        Data.Employee[Data.Employee.length]=this.state;
        window.localStorage.setItem('Data',JSON.stringify(Data))
        alert('New user added')
      }
  
    }
  };

  render () {
    
    return (
      <div id='addUserContainer'>

        <div className='addUserMainContainer'>
          <div className='form'>
          
            <div className='row'>
                <div className='left'>Employee ID:</div>
                <div className='right'>
                  <input className='box' type='number' name='EmpId'
                  placeholder= 'Employee ID..' 
                  onChange={e => this.change(e)}  />
                </div>
              </div>

            <div className='row'>
              <div className='left'>Name:</div>
              <div className='right'>
                <input className='box' type='text' name='EmpName'
                placeholder= 'Employee name...'
                onChange={e => this.change(e)}  />
              </div>
            </div>

            <div className='row'>
              <div className='left'>E-mail:</div>
              <div className='right'><input className='box' 
              type='EmailId' name='EmailId' 
              onChange={e=>this.change(e)} /></div>
            </div>

            <div className='row'>
              <div className='left'>Role:</div>
              <div className='right'><input className='box' list='Role'name='Role'
              onChange={e=>this.change(e)} />
                <datalist id='Role'>
                  <option value='Employee' />
                  <option value='Employer' />
                </datalist>
              </div>
            </div>

            <div className='row'>
              <div className='left'>ContactNum:</div>
              <div className='right'><input className='box' type='number' name='ContactNum' 
              onChange={e=>this.change(e)}  /></div>
            </div>

            <div className='row'>
              <div className='left'>Dob:</div>
              <div className='right'><input className='box DobPadding' type='date'
               name='Dob' 
              onChange={e => this.change(e) } /></div>
            </div>

            <div className='row'>
              <div className='left'>Gender:</div>
              <div className='right'>
                <input type='radio' name='gender' value='male'
                 onChange={e=> this.change(e)} ref='male' />Male
                <input type='radio' name='gender' value='female'
                onChange={e=> this.change(e)} ref='female' />Female
              </div>
            </div>


            <div className='row'>
              <div className='left'>Department:</div>
              <div className='right'><input className='box' list='department' name='department' 
              onChange={e=>this.change(e)} />
                <datalist id='department'>
                  <option value='WEB' />
                  <option value='ANDROID' />
                  <option value='TESTING' />
                  <option value='ROKU' />
                </datalist>
              </div>
            </div>

            <div className='row'>
              <div className='left'>Date of Joining:</div>
              <div className='right'><input className='box DobPadding' type='date' 
              name='doj' 
              onChange={e => this.change(e) } /></div>
            </div>

            <div className='row'>
              <div className='left'>Working location:</div>
              <div className='right'><input className='box' list='wl'name='wl'
              onChange={e=>this.change(e)} />
                <datalist id='workLocation'>
                  <option value='Chennai' />
                  <option value='New Jersey' />
                  <option value='California' />
                  <option value='New york' />
                </datalist>
              </div>
            </div>

            <div className='row'>
              <div className='right rowSeven'><button className='rowSevenButton' 
              onClick={this.onSubmit}>Submit</button></div>
              <div className='right rowSeven'><button className='rowSevenButton'
              onClick={this.reset}> Reset
              </button></div>
            </div>

          </div>
         
        </div>
      </div>
    )
  }
}

export default AddUser