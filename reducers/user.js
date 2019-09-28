export const initialState = {
	username: 'Admin',
	password: '12345',
	status: localStorage.getItem('login') ? JSON.parse( localStorage.getItem('login') ) : false
}

export const userReducer = (state = initialState, action) => {
	if (action.type === 'LOG_OUT'){
			return { ...state, status: action.payload };
	}else if(action.type === 'LOG_IN'){
		return { ...state, status: action.payload };
	}else{
		return state;
	}
}