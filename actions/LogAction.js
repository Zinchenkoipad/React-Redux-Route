export const LogOut = () => {
	localStorage.setItem('login', false);
	return{
		type: 'LOG_OUT',
		payload: false
	}
}
export const LogIn = () => {
	localStorage.setItem('login', true);
	return{
		type: 'LOG_IN',
		payload: true
	}
}

