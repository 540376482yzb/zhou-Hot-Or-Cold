import React from 'react'

export default function Board(props){
	return(
		<form>
			<Info  info='dummy '/>
			<div>
				<input name='guess' placeholder='Enter Your Guess' />
			</div>
			<div>
				<button>Guess</button>
			</div>
			<Log />
		</form>
	)
}