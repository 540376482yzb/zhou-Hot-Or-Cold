
const MIN = 0
const MAX = 100

const initialState ={
	realNum: Math.floor(Math.random()*(MAX-MIN+1)),
	alreadyGuessed:false,
	guess:null,
	history:[]
}


function backUp(){
	return({realNum:Math.floor(Math.random()*(MAX-MIN+1)),
		alreadyGuessed:false,
		guess:null,
		history:[]
	})
}

const gameReducer = (state=initialState, action) => {
	switch(action.type){
	case 'INIT_GAME':	
		return backUp()
	case 'UPDATE_GAME':
		const updateS = Object.assign({},state, action.update)
		return updateS
	default:
		return state

	}
}

export default gameReducer