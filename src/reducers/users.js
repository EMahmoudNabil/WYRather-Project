// Users Action Types
import { RECEIVE_USERS ,ADD_QUESTION , ADD_ANSWER } from '../actions/users';


// Users Reducer Function
export default function users(state = {}, action) {

	switch (action.type) {
		
		case RECEIVE_USERS:
			return {
				...state,
				...action.users
			};

		case ADD_QUESTION:
			return {
				...state,
				[action.question.author]: {
					...state[action.question.author],
					questions: state[action.question.author].questions.concat([
						action.question.id
					])}
			};

		case ADD_ANSWER:
			const { qid, answer, authedUser } = action;

			return {
				...state,
				[authedUser]: {
					...state[authedUser],
					answers: {
						...state[authedUser].answers,
						[qid]: answer
					}}};

		default:
			return state;
	}
}
