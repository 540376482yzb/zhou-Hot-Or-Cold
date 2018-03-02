
export const initGame = () => {
	return{
		type:'INIT_GAME'
	}
}

export const updateGame = (update) => {
	return{
		type:'UPDATE_GAME',
		update
	}
}