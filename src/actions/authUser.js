
// AUth Action Types
export const SET_AUTH_USERS = 'SET_AUTH_USERS';
export const RESET_AUTH_USERS = 'RESET_AUTH_USERS';


//Action Creator to Login User
export function setAuthUsers(id) {
	return {
		type: SET_AUTH_USERS,
		id
	};
}
//Action Creator to Logout User
export function resetAuthUsers(id) {
	return {
		type: RESET_AUTH_USERS
	};
}


