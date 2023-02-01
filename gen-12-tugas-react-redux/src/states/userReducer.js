const initialState = JSON.parse(sessionStorage.getItem('authUser')) || {}

function userReducer(state = initialState, action) {
	switch (action.type) {
		case 'user/set_auth_user':
			return action.payload
		case 'user/set_unauth_user':
			return {}
		default:
			return state
	}
}

export default userReducer