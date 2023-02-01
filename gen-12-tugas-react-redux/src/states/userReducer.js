function userReducer(state = null, action) {
	switch (action.type) {
		case 'user/set_auth_user':
			return action.payload
		case 'user/set_unauth_user':
			return null
		default:
			return state
	}
}

export default userReducer