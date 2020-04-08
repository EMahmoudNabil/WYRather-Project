// Questions Action Types
import { RECEIVE_QUESTIONES, ADD_QUESTION, ADD_ANSWER } from '../actions/questions';


// Questions Reducer Function
export default function questions(state = {}, action) {

	switch (action.type) {
		
		case RECEIVE_QUESTIONES:
			return {
				...state,
				...action.questions
			};

		case ADD_QUESTION:
			return {
				...state,
				[action.question.id]: action.question
			};

		case ADD_ANSWER:
			const { qid, answer, authedUser } = action;

			return {
				...state,
				[qid]: {
					...state[qid],
					[answer]: {
						...state[qid][answer],
						votes: state[qid][answer].votes.concat([authedUser])
					}
				}
			};

		default:
			return state;
	}
}
