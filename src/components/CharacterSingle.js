import React from 'react';
import DamageInputForm from './DamageInputForm';
import DamageUpdateMessage from './DamageUpdateMessage';

class CharacterSingle extends React.Component {
	state = {
		hp: this.props.details.hp,
		status: '' // nothing, died, healed, revived, damaged
	}

	updateHp = ( damage, maxHp ) => {
		const oldHp = this.state.hp ?? 0;
		let newHp = oldHp - parseInt( damage );

		// HP can't drop below zero.
		if ( newHp < 0 ) {
			newHp = 0;
		}

		// HP can't exceed max.
		if ( newHp > maxHp ) {
			newHp = maxHp;
		}

		const updatedStats = {
			newHp,
			oldHp,
			damage
		};

		this.setState( { hp: newHp } );

		this.updateStatus( updatedStats );
	}

	updateStatus = ( { newHp, oldHp, damage } ) => {
		let status = '';

		// If the current HP is the same as the last HP, nothing happened. 🤷‍♂️
		if ( damage === 0 ) {
			status = 'nothing';
		}


		// If the HP is less than it was last turn, mark them as damaged. Update HP handles if HP drops below 0.
		if ( newHp < oldHp ) {
			status = 'damaged';

			// If the HP drops to 0, the character has died.
			if ( newHp === 0 ) {
				status = 'died';
			}
		}

		// Add a dead status if damage was recorded but the character has died. This could be useful for displaying information about saving throws.
		if ( newHp === 0 && oldHp === 0 ) {
			status = 'dead'
		}

		// If the HP is greater than it was last turn, mark them as healed or revived if they've been brought back from the dead.
		if ( newHp > oldHp ) {
			status = 'healed';

			// If the character's HP was 0 last turn, they've been brought back from the dead.
			if ( oldHp === 0 ) {
				status = 'revived';
			}
		}

		// Update the status.
		this.setState( { status } );
	}

	render() {
		const character = this.props.details;
		const isPC = this.props.type === 'character' ? 'PC' : 'NPC';
		return (
			<li id={`character-${character.index}`}>
					<span className="character-details" id={`character-${character.index}-details`}>{ character.name } ({ character.init }) ({ isPC })</span>
					<span className="character-hp" id={`character-${character.index}-hp`}>
						<span className="hp-label">HP: </span>
						{ this.state.hp }
					</span>
				<DamageInputForm
					id={ character.index }
					hp={ character.hp }
					updateHp={ this.updateHp }
					characterStatus={ this.state.status }
					updateStatus={ this.updateStatus }
					battleStarted={ this.props.battleStarted }
				/>
				<DamageUpdateMessage
					message={ this.state.message }
				/>
			</li>
		)
	}
}

export default CharacterSingle;