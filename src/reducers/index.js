
const initialState ={
	realNum: null,
	alreadyGuessed:false,
	guess:null,
	history:[]
}


const gameReducer = (state=initialState, action) => {
	let newState
	switch(action.type){
	case 'INIT_GAME':	
		// console.log(action)
		newState = Object.assign({},initialState, {realNum:action.realNum})
		// console.log(newState)
		return newState
	case 'UPDATE_GAME':
		newState = Object.assign({},state, action.update)
		return newState
	default:
		return state

	}
}

export default gameReducer