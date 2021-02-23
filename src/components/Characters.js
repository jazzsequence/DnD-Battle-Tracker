import React from 'react';
import CharacterList from './CharacterList';
import AddCharacterForm from './AddCharacterForm';

class Characters extends React.Component {
	render() {
		return (
		<div className="characters">
			<h2>Characters</h2>
			<CharacterList
				type="character"
				characters={ this.props.characters }
				battleStarted={ this.props.battleStarted }
			/>
			<AddCharacterForm
				type="character"
				characterIndex={ this.props.characterIndex }
				updateCharacterCount={ this.props.updateCharacterCount }
				updateCharacters={ this.props.updateCharacters }
			/>
		</div>
		)
	}
}

export default Characters;