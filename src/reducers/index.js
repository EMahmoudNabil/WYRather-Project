// Redux Combine Reducers Function
import { combineReducers } from 'redux';

// Reducer Functions
import authedUser from './authUser';
import users from './users';
import questions from './questions';


// React Redux Loading Bar
// import { loadingBarReducer } from 'react-redux-loading'

// Root Reducer Function
export default combineReducers({
	authedUser,
	users,
	questions
	// problem
	// loadingBar: loadingBarReducer
	
});
