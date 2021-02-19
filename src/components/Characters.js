import React from 'react';
import CharacterList from './CharacterList';
import AddCharacterForm from './AddCharacterForm';

class Characters extends React.Component {
	addCharacter = ( character ) => {

		// const tmpCharButton = document.getElementById( `add-tmp-char-${id}` );
		// const charInput = document.getElementById( `addChar-${id}` );
		// const charName = charInput ? charInput.value : false;
		// const dexInput = document.getElementById( `charDex-${id}` );
		// const dexVal = dexInput ? dexInput.value : false;
		// let hasName = false;

		// if ( charName && charName !== 'undefined' && charName !== '' ) {
		// 	// We have a name, so toggle hasName to true.
		// 	hasName = true;

		// 	// Remove the old input and button.
		// 	charInput.remove();

		// 	// Only remove the add button if we have a Dex value.
		// 	if ( dexVal !== 'undefined' && dexVal !== '' ) {
		// 		tmpCharButton.remove();
		// 	} else {
		// 		// We still need to add the dex. Change the button value to indicate that a Dex score is still needed.
		// 		const buttonTxt = `${tmpCharButton.textContent} Dex`;
		// 		tmpCharButton.textContent = buttonTxt;
		// 	}

		// 	buildName( thisItem, id, charName );
		// }
	}

	buildName = ( a, b, c ) => {}

	render() {
		return (
		<div className="characters">
			<h2>Characters</h2>
			<CharacterList
				type="character"
				characters={ this.props.characters }
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