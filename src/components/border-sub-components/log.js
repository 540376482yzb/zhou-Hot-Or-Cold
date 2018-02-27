import React from 'react'
import './log.css'
export default function Log(props) {
	return(
		<div className='board-log'>
			{props.number}
		</div>
	)
}