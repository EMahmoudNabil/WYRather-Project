
// Users Action Types
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_ANSWER = 'ADD_ANSWER';
export const ADD_QUESTION = 'ADD_QUESTION';

// Receive Users Action Creator
export function receiveUsers(users) {
	return {
		type: RECEIVE_USERS,
		users
	};
}

// Add Question Action Creator
export function addQuestion(question) {
	return {
		type: ADD_QUESTION,
		question
	};
}




// Save Question Answer Action Creator
export function addAnswer({ qid, answer, authedUser }) {

	return {
		type: ADD_ANSWER,
		qid,
		answer,
		authedUser
		
	};
}