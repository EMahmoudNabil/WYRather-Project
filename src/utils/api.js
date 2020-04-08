import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from './_DATA.js';


// get all Data for [All User and All Questions ]
export function getInitialData() {
	return Promise.all([_getUsers(), _getQuestions()]).then(([users, questions]) => ({
		users,
		questions
	}));
}

// Api function to  Save Question 
export function saveQuestion(question) {
	return _saveQuestion(question);
}

// Api function to  Save Answer Question
export function saveQuestionAnswer(authUser, qid, answer) {
	return _saveQuestionAnswer(authUser, qid, answer);
}

export function getUsers (id) {
    return _getUsers(id);
}

export function getQuestions() {
    return _getQuestions();
}