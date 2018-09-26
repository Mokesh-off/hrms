import * as actionTypes from './actionTypes'
import {Store} from '../Store/Store';


export function loginDispatcher (userInput) {

  let flag=false;
  let y= Store.getState().loginReducer.Employee;

      y.map( (Emp,i) => {
        if(y[i].EmailId === userInput.email && y[i].Password === userInput.password){
          flag = true;
        }
      }
      )
      if(flag){
      return {
      type: actionTypes.SAVE_LOGIN_DETAILS,
      email: userInput.email,
      password : userInput.password
    }
  }else{
      return {
        type: ''
      }
    }


}

