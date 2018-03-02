import React from 'react'
import Board from './board'
import Nav from './nav'
import './game.css'
import {initGame, updateGame} from '../actions'
import {connect} from 'react-redux'
export class Game extends React.Component{

	render(){
		return(
			<div className='game'>
				<Nav atClick={e => this.props.dispatch(initGame())}/>
				<h1>COLD OR HOT</h1>
				<Board 
					state={this.props}
					updateState={data => this.props.dispatch(updateGame(data))}/>
			</div>
		)
	}
}	

const mapStateToProps = state => ({
	realNum:state.realNum,
	guess:state.guess,
	history:state.history,
	alreadyGuessed:state.alreadyGuessed
})

export default connect(mapStateToProps)(Game)