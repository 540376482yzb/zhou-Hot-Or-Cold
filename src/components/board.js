import React from 'react'
import Info from './border-sub-components/info'
import Log from './border-sub-components/log'
import './board.css'
import {connect} from 'react-redux'
import {updateGame} from '../actions'
export class Board extends React.Component{

	measureGuess(value){
		if(!value && value !==0){
			return('Make Your Guess')
		}
		if(this.props.alreadyGuessed){
			return(`${value} is already guessed`)
		}

		const guess = Number(value)

		if(guess === this.props.realNum){
			return('congrat, you won')
		}
		if(guess < this.props.realNum -10 || guess > this.props.realNum + 10){
			return('cold')
		}
		if(guess !== this.props.realNum && (guess > this.props.realNum - 5 && guess < this.props.realNum + 5)){
			return('hot')
		}

		return('warm')
	}

	updateInput(e){

		e.preventDefault()
		const myGuess = Number(this.textInput.value)
		this.textInput.value=''
		let data
		if(myGuess !== this.props.history.find(num => num === myGuess)){
			const newCollection =[...this.props.history, myGuess]
			data = {guess:myGuess,alreadyGuessed:false,history:newCollection}
			// console.log(data)
			this.props.dispatch(updateGame(data))
		}else{
			data = {guess:myGuess, alreadyGuessed:true}
			this.props.dispatch(updateGame(data))
		}
	}

	render(){
		const logs = this.props.history.map((log,index) => {
			return(
				<Log key={index} number={log}/>
			)
		})
		return(
			<form 
				className='board'
				onSubmit={e=> this.updateInput(e) }
			>
				<Info info={this.measureGuess(this.props.guess)}/>
				<div className='control-container'>
					<input 
						type="text"
						ref={input => {this.textInput = input}	} 
						className='control-input' name='guess' placeholder='Enter Your Guess' autoComplete="off"/>
					<button className='control-btn'>Guess</button>
					<div className='control-display'>
						Guess # <span>{this.props.history.length}</span>!
					</div>
				</div>
				<div className='board-log-container'>
					{logs}
				</div>
			</form>
		)	
	}
}

function mapStateToProps(state){
	return{
		realNum:state.realNum?state.realNum: Math.floor(Math.random()*(101)),
		guess:state.guess,
		history:state.history,
		alreadyGuessed:state.alreadyGuessed
	}
}
export default connect(mapStateToProps)(Board)