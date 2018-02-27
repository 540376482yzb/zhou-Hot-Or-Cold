import React from 'react'
import './info.css'
export default function Info(props) {
	return(
		<div className='board-info'>
			{props.info}
		</div>
	)
}