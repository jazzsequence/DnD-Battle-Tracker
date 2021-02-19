import React from 'react';
import Header from './Header';
import Initiative from './Initiative';
import Characters from './Characters';
import NPCs from './NPCs';
import Save from './Save';

class App extends React.Component {
	state = {
		characterCount: 0, // The total number of characters on the page.
		npcCount: 0, // The total number of NPCs on the page.
		characters: {}, // A list of all the characters
	}

	updateCharacterCount = () => {
		const count = this.state.characterCount + 1;
		this.setState( { characterCount: count } );
	}

	updateNpcCount = () => {
		const count = this.state.npcCount + 1;

		this.setState( { npcCount: count } );
	}

	render() {
		return (
			<>
			<Header />
			<div className="battle-tracker">
				<Initiative />
				<Characters
					characterIndex={ this.state.characterCount }
					updateCharacterCount={ this.updateCharacterCount }
					characters={ this.state.characters }
				/>
				<NPCs
					characterIndex={ this.state.npcCount }
					updateCharacterCount={ this.updateNpcCount }
				/>
				<Save />
			</div>
			</>
		)
	}
}

export default App;