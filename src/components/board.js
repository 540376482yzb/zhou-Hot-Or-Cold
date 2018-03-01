import React from 'react'
import Info from './border-sub-components/info'
import Log from './border-sub-components/log'
import './board.css'
export default class Board extends React.Component{
	constructor(props){
		super(props)
		this.state= {
			realNum: null,
			alreadyGuessed:false,
			guess:null,
			history:[]
		}
	}
	measureGuess(value){
		if(!value){
			return('Make Your Guess')
		}
		if(this.state.alreadyGuessed){
			return(`${value} is already guessed`)
		}

		const guess = Number(value)

		if(guess === this.state.realNum){
			return('congrat, you won')
		}
		if(guess < this.state.realNum -10 || guess > this.state.realNum + 10){
			return('cold')
		}
		if(guess !== this.state.realNum && (guess > this.state.realNum - 5 && guess < this.state.realNum + 5)){
			return('hot')
		}

		return('warm')
	}
	initNum(){
		const MIN = 0
		const MAX = 100
		const realNum = Math.floor(Math.random()*(MAX-MIN+1))
		this.props.reset()
		this.setState({
			realNum,
			alreadyGuessed:false,
			guess:null,
			history:[]
		})
	}
	
	updateInput(e){
		e.preventDefault()
		const myGuess = Number(this.textInput.value)
		this.textInput.value=''
		if(myGuess !== this.state.history.find(num => num === myGuess)){
			const newCollection =[...this.state.history, myGuess]
			this.setState({
				guess:myGuess,
				alreadyGuessed:false,
				history:newCollection})
		}else{
			this.setState({
				guess:myGuess,
				alreadyGuessed:true
			})
		}
	}

	render(){
		if(!this.state.realNum || this.props.newGame){
			this.initNum()
		}
		const logs = this.state.history.map((log,index) => {
			return(
				<Log key={index} number={log}/>
			)
		})

		return(
			<form 
				className='board'
				onSubmit={e=> this.updateInput(e)}
			>
				<Info info={this.measureGuess(this.state.guess)}/>
				<div className='control-container'>
					<input ref={input => (this.textInput = input)} className='control-input' name='guess' placeholder='Enter Your Guess' />
					<button className='control-btn'>Guess</button>
					<div className='control-display'>
						Guess # <span>{this.state.history.length}</span>!
					</div>
				</div>
				<div className='board-log-container'>
					{logs}
				</div>
			</form>
		)
	}
	
}