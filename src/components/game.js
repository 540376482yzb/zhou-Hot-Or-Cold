import React from 'react'
import Board from './board'
import Nav from './nav'
import './game.css'
export default class Game extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			anotherGame:false
		}
	}
	newGame(){
		this.setState({
			anotherGame:true
		})
	}
	render(){
		return(
			<div className='game'>
				<Nav atClick={() => this.newGame()}/>
				<h1>COLD OR HOT</h1>
				<Board newGame={this.state.anotherGame}
					reset={() => this.setState({anotherGame:false})} />
			</div>
		)
	}
	

}	