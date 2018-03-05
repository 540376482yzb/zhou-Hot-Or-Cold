import React from 'react'
import Board from './board'
import Nav from './nav'
import './game.css'
import {initGame} from '../actions'
import {connect} from 'react-redux'
export function Game(props){
	
	return(
		<div className='game'>
			<Nav atClick={e => props.dispatch(initGame(Math.floor(Math.random()*(101))))}/>
			<h1>COLD OR HOT</h1>
			<Board/>
		</div>
	)
}


export default connect()(Game)