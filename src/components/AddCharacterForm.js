import React from 'react';
import { calculateModifier } from '../helpers';

class AddCharacterForm extends React.Component {
	render() {
		const index = this.props.characterIndex;
		return (
			<form className="character-edit" onSubmit={ this.createCharacter }>
				<input
					name="character-name"
					className="character-name"
					id={`addChar-${index}`}
					placeholder="Character Name"
					ref={ this.nameRef }
					required
				/>
				<input
					name="dexterity"
					className="character-dex"
					id={`charDex-${index}`}
					type="number"
					min="1"
					max="30"
					placeholder="Dex"
					ref={ this.dexRef }
					required
				/>
				<input
					name="hp"
					className="hp-input"
					id={`hp-${index}`}
					placeholder="HP"
					type="number"
					min="1"
					ref={ this.hpRef }
					required
				/>
				<input
					name="initiative"
					className="character-initiative"
					type="number"
					min="1"
					max="20"
					placeholder="d20"
					id={`charInit-${index}`}
					ref={ this.initRef }
					required
				/>
				<button
					type="submit"
					id={`add-tmp-char-${index}`}
					onClick={ () => {
							this.createCharacter;
						}
					}
				>Add</button>
			</form>
		)
	}
}

export default AddCharacterForm;