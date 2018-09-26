import * as actionsTypes from '../action/actionTypes'
import {initialState, Login} from './initialState'

export function loginReducer (state = (initialState), action) {

  switch (action.type) {
    
    case actionsTypes.SAVE_LOGIN_DETAILS:
    return Object.assign({},state, {
      currentUserId:action.email
      })
      
    default:
      return state
  }

}