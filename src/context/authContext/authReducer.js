import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../types';
const reducer = (state, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return {
				...state,
				isAuthenticated: true,
				user: action.payload
			};
		case LOGIN_FAIL:
		case LOGOUT:
			return {
				...state,
				isAuthenticated: false,
				user: null
			};
		default:
			return {
				...state,
			};
	}
};

export default reducer;
