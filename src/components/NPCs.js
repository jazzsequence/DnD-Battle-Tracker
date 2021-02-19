import React from 'react';
import CharacterList from './CharacterList';
import AddNewButton from './AddNewButton';

class NPCs extends React.Component {

	render() {
		return (
			<div className="monsters-npcs">
				<h2>Monsters & NPCs</h2>
				<CharacterList
					type="monster-npc"
				/>
				<AddNewButton
					type="npc"
				/>
			</div>
		)
	}
}

export default NPCs;