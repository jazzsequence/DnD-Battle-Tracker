import React from 'react';
import CharacterList from './CharacterList';
import AddCharacterForm from './AddCharacterForm';

class NPCs extends React.Component {

	render() {
		return (
			<div className="monsters-npcs">
				<h2>Monsters & NPCs</h2>
				<CharacterList
					type="monster-npc"
					characters={ this.props.npcs }
				/>
				<AddCharacterForm
					type="npc"
					characterIndex={ this.props.characterIndex }
					updateCharacterCount={ this.props.updateCharacterCount }
					updateCharacters={ this.props.updateCharacters }

				/>
			</div>
		)
	}
}

export default NPCs;