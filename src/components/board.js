import React from 'react'
import Info from './border-sub-components/info'
import Log from './border-sub-components/log'
import './board.css'
export default function Board(props){
	const logs = [
		{number: 5},
		{number: 6},
		{number: 7}
	]
	const pageLog = logs.map( (log, index) =>{
		return (
			<Log {...log} key={index} />
		)
	})

	return(
		<form className='board'>
			<Info info='Make Your Guess'/>
			<div className='control-container'>
				<input className='control-input' name='guess' placeholder='Enter Your Guess' />
				<button className='control-btn'>Guess</button>
				<div className='control-display'>
          Guess # <span>0</span>!
				</div>
			</div>
			<div className='board-log-container'>{pageLog}</div>
		</form>
	)
}