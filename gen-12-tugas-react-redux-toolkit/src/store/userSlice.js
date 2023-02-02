import { createSlice } from '@reduxjs/toolkit'


const initialState = JSON.parse(sessionStorage.getItem('authUser')) || {}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setAuthUser: (state, action) => {
			return {...action.payload}
		},
		unsetAuthUser: (state, action) => {
			return {}
		}
	}
})

export const { setAuthUser, unsetAuthUser } = userSlice.actions
export default userSlice.reducer

// function userReducer(state = initialState, action) {
// 	switch (action.type) {
// 		case 'user/set_auth_user':
// 			return action.payload
// 		case 'user/set_unauth_user':
// 			return {}
// 		default:
// 			return state
// 	}
// }

// export default userReducer