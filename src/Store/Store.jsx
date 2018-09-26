import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers/Index'
import { createLogger } from 'redux-logger'

const loggerMiddleWare = createLogger()

export const Store = createStore(
  rootReducer,
  // +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    loggerMiddleWare
  )
)
