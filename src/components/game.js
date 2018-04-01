import React from 'react'
import Board from './board'
import Nav from './nav'
import './game.css'
import { initGame } from '../actions'
import { connect } from 'react-redux'
export class Game extends React.Component {
	componentDidMount() {
		this.props.dispatch(initGame(Math.floor(Math.random() * 101)))
	}
	render() {
		return (
			<div className="game">
				<Nav atClick={e => this.props.dispatch(initGame(Math.floor(Math.random() * 101)))} />
				<h1>COLD OR HOT</h1>
				<Board />
			</div>
		)
	}
}

export default connect()(Game)
