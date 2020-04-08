// Login Action Types
import { SET_AUTH_USERS, RESET_AUTH_USERS } from '../actions/authUser';

// Login Reducer Function
export default function authedUser(state = null, action) {

	switch (action.type) {

		case SET_AUTH_USERS:
			return action.id;
			
		case RESET_AUTH_USERS:
			return null;

		default:
			return state;
	}
}
