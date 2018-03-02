import React from 'react'
import Info from './border-sub-components/info'
import Log from './border-sub-components/log'
import './board.css'
export default class Board extends React.Component{

	measureGuess(value){
		if(!value && value !==0){
			return('Make Your Guess')
		}
		if(this.props.state.alreadyGuessed){
			return(`${value} is already guessed`)
		}

		const guess = Number(value)

		if(guess === this.props.state.realNum){
			return('congrat, you won')
		}
		if(guess < this.props.state.realNum -10 || guess > this.props.state.realNum + 10){
			return('cold')
		}
		if(guess !== this.props.state.realNum && (guess > this.props.state.realNum - 5 && guess < this.props.state.realNum + 5)){
			return('hot')
		}

		return('warm')
	}

	updateInput(e){

		e.preventDefault()
		const myGuess = Number(this.textInput.value)
		this.textInput.value=''
		let data
		if(myGuess !== this.props.state.history.find(num => num === myGuess)){
			const newCollection =[...this.props.state.history, myGuess]
			data = {guess:myGuess,alreadyGuessed:false,history:newCollection}
			// console.log(data)
			this.props.updateState(data)
		}else{
			data = {guess:myGuess, alreadyGuessed:true}
			this.props.updateState(data)
		}
	}

	render(){
		const logs = this.props.state.history.map((log,index) => {
			return(
				<Log key={index} number={log}/>
			)
		})
	
		return(
			<form 
				className='board'
				onSubmit={e=> this.updateInput(e) }
			>
				<Info info={this.measureGuess(this.props.state.guess)}/>
				<div className='control-container'>
					<input 
						type="text"
						ref={input => {this.textInput = input}	} 
						className='control-input' name='guess' placeholder='Enter Your Guess' />
					<button className='control-btn'>Guess</button>
					<div className='control-display'>
						Guess # <span>{this.props.state.history.length}</span>!
					</div>
				</div>
				<div className='board-log-container'>
					{logs}
				</div>
			</form>
		)	
	}

	
}