export const initialState = {
	content: 'place for some data ',// планировалось сюда записывать неудачные попытки зарегистрироваться, но они записываются в LocalStorage
	array: ['some', 'array', 'data']
}

export const pageReducer = (state = initialState) => state;
