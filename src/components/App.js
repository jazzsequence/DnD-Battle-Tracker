import React from 'react';
import Header from './Header';
import Characters from './Characters';
import NPCs from './NPCs';
import Save from './Save';

class App extends React.Component {
	state = {
		characterCount: 0, // The total number of characters on the page.
		npcCount: 0, // The total number of NPCs on the page.
		characters: [], // A list of all the characters.
		npcs: [], // A list of all the NPCs & monsters.
		battleStarted: false,
		battleCanStart: false,
	}


	componentDidUpdate() {
		// Handle starting the battle.
		this.maybeUpdateBattleCanStart();
	}

	updateCharacters = ( key, updatedCharacter ) => {
		// Copy the current state.
		const characters = this.state.characters;

		// Update the state.
		characters[key] = updatedCharacter;

		// Sort the characters.
		characters.sort(
			// Sort by initiative first.
			( a, b ) => ( a.init < b.init ) ? 1 :
				// If initiative is the same, sort by dex.
				( a.init === b.init ) ? (
					( a.dex < b.dex ) ? 1 : -1
				) : -1
		)

		// Set that to state.
		this.setState( { characters } );
	}

	updateNPCs = ( key, updatedNPC ) => {
		// Copy the current state.
		const npcs = this.state.npcs;

		// Update the state.
		npcs[key] = updatedNPC;

		// Sort the characters.
		npcs.sort(
			// Sort by initiative first.
			( a, b ) => ( a.init < b.init ) ? 1 :
				// If initiative is the same, sort by dex.
				( a.init === b.init ) ? (
					( a.dex < b.dex ) ? 1 : -1
				) : -1
		)

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

	maybeUpdateBattleCanStart = () => {
		const npcCount = this.state.npcCount;
		const characterCount = this.state.characterCount;

		// Bail if the battle has already started.
		if ( this.state.battleStarted ) {
			return;
		}

		// Bail if we've already started the fight.
		if ( this.state.battleCanStart ) {
			return;
		}

		if ( npcCount > 0 && characterCount > 0 ) {
			this.setState( { battleCanStart: true } );
		}
	}

	updateBattleStarted = () => {
		if ( this.state.battleStarted ) {
			return;
		}

		this.setState( { battleStarted: true } );
	}

	render() {
		return (
			<>
			<Header />
			<div className="battle-tracker">
				<Characters
					characterIndex={ this.state.characterCount }
					updateCharacterCount={ this.updateCharacterCount }
					characters={ this.state.characters }
					updateCharacters={ this.updateCharacters }
					battleStarted={ this.state.battleStarted }
				/>
				<NPCs
					npcIndex={ this.state.npcCount }
					updateNpcCount={ this.updateNpcCount }
					npcs={ this.state.npcs }
					updateNPCs={ this.updateNPCs }
					battleStarted={ this.state.battleStarted }
				/>
				<Save
					battleCanStart={ this.state.battleCanStart }
					updateBattleStarted={ this.updateBattleStarted }
				/>
			</div>
			</>
		)
	}
}

export default App;