import React from 'react'
import Board from './board'
import Nav from './nav'
import './game.css'
export default function Game(props){
	return(
		<div className='game'>
			<Nav />
			<h1>COLD OR HOT</h1>
			<Board />
		</div>
	)
}