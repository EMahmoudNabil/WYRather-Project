
// API Functions
import { getInitialData } from '../utils/api';

// Action Creators
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';

// Async Action Creator for getting and sending the initial app data to the Redux Store
export function handleInitialData() {

	return (dispatch) => {
	
		return getInitialData().then(({ users, questions }) => {
			dispatch(receiveUsers(users));
			dispatch(receiveQuestions(questions));
			
		});
	};
}
