import React from 'react'
import './nav.css'

export default function(props) {
	return(
		<ul className='navigation-bar'>
			<li className='nav-item'><a>What is New?</a></li>
			<li className='nav-item'
				onClick={() => {
					props.atClick()}}>+ New Game</li>
		</ul>
	)
}