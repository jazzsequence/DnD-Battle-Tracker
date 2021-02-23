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
					battleStarted={ this.props.battleStarted }
				/>
				<AddCharacterForm
					type="npc"
					npcIndex={ this.props.npcIndex }
					updateNpcCount={ this.props.updateNpcCount }
					updateNPCs={ this.props.updateNPCs }
					battleStarted={ this.props.battleStarted }
				/>
			</div>
		)
	}
}

export default NPCs;