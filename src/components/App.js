import React from 'react';
import citations from '../citations.js';

class App extends React.Component{

	state = {};

	componentWillMount(){
		this.genererCitation();
	}

	genererCitation = event => {
		//transform citation en array
		const keyArray = Object.keys(citations);
		//Une citation au hasard
		const randomKey = keyArray[Math.floor(Math.random() * keyArray.length)];
		
		if(this.state.citation === citations[randomKey].citation){
			this.genererCitation();
			return;
		}

		this.setState(citations[randomKey]);

	};

	render(){
		console.log(citations);
		return(
			<div>
				<p> {this.state.citation}
					<span> {this.state.auteur} </span>
					<button onClick={e => this.genererCitation(e)} > Une autre citaton ! </button>
				</p>
			</div>
			)
			}
		}

export default App;