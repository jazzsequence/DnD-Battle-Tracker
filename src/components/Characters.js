import React from 'react';
import CharacterList from './CharacterList';
import AddNewButton from './AddNewButton';

class Characters extends React.Component {
	addCharacter = ( character ) => {

	}
	render() {
		return (
		<div className="characters">
			<h2>Characters</h2>
			<CharacterList
				type="character"
			/>
			<AddCharacterForm
				addCharacter={ this.addCharacter }
				characterIndex={ this.props.characterIndex }
				updateCharacterCount={ this.props.updateCharacterCount }
			/>
		</div>
		)
	}
}

export default Characters;