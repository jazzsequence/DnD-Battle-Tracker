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
		characters: {}, // A list of all the characters.
		npcs: {}, // A list of all the NPCs & monsters.
	}

	updateCharacters = ( key, updatedCharacter ) => {
		// Copy the current state.
		const characters = { ...this.state.characters };

		// Update the state.
		characters[key] = updatedCharacter;

		// Set that to state.
		this.setState( { characters } );
	}

	updateNPCs = ( key, updatedNPC ) => {
		// Copy the current state.
		const npcs = { ...this.state.npcs };

		// Update the state.
		npcs[key] = updatedNPC;

		// Set that to state.
		this.setState( { npcs } );
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
					updateCharacters={ this.updateCharacters }
				/>
				<NPCs
					characterIndex={ this.state.npcCount }
					updateCharacterCount={ this.updateNpcCount }
					npcs={ this.state.npcs }
					updateNPCs={ this.updateNPCs }
				/>
				<Save />
			</div>
			</>
		)
	}
}

export default App;