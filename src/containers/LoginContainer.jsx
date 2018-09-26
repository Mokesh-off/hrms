import Login from '../components/Login/Login'
import { connect } from 'react-redux'

import {loginDispatcher} from '../action/Index'

const mapStateToProps = (state) => {

  return {
    currentUserId : state.loginReducer.currentUserId
  }
}

/* to update global redux data  (Write to redux)*/

const mapDispatchToProps = (dispatch) => {
  return {
    saveLogIn: x => {
      dispatch(loginDispatcher(x));
    }
  }
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default LoginContainer
