// Question API functions
import { saveQuestion, saveQuestionAnswer ,getQuestions   } from '../utils/api';


// Questions Action Types
export const RECEIVE_QUESTIONES = 'RECEIVE_QUESTIONES';
export const ADD_ANSWER = 'ADD_ANSWER';
export const ADD_QUESTION = 'ADD_QUESTION';


// Action Creator to Receive Question
export function receiveQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONES,
		questions
	};
}

// Action Creator to Add New Question
function addQuestion(question) {
	return {
		type: ADD_QUESTION,
		question
	};
}


// Action Creator to  Save Answer
function addAnswer({ qid, answer, authedUser }) {
	return {
		type: ADD_ANSWER,
			qid,
			answer,
			authedUser
		
	};
}

// Add New Question Async Action Creator Function (uses the Thunk middleware)
export function handleNewQuestion(optionOne, optionTwo) {
	return (dispatch, getState) => {
		const { authedUser } = getState();
		return saveQuestion({
			optionOneText: optionOne,
			optionTwoText: optionTwo,
			author: authedUser
		})
			.then((question) => dispatch(addQuestion(question)))
	};
}

// Save Question Answer Async Action Creator Function (uses the Thunk middleware)
export function handleSaveAnswer(qid, answer) {
	return (dispatch, getState) => {

		const { authedUser } = getState();

		return saveQuestionAnswer({
			qid,
			answer,
			authedUser
		}).then(() =>
				dispatch(
					addAnswer({
						qid,
						answer,
						authedUser
					})
				)
				)};}



export function handleGetQuestion() {

	return (dispatch) => {
		return getQuestions()
		
			.then((questions) => {
				dispatch(receiveQuestions(questions));			
			});
	}
}