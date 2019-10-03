import { combineReducers } from 'redux'
import authReducer from './authReducer'
import movieReducer from './movieReducer'
// import tourReducer from './tourReducer'

export default combineReducers({
  auth: authReducer,
  movies: movieReducer
})
