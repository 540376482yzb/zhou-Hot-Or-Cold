
export const initGame = (realNum) => {
	return{
		type:'INIT_GAME',
		realNum
	}
}

export const updateGame = (update) => {
	return{
		type:'UPDATE_GAME',
		update
	}
}