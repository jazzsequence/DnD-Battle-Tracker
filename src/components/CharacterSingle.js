import React from 'react';

class CharacterSingle extends React.Component {


	render() {
		const character = this.props.details;
		const isPC = this.props.type === 'character' ? 'PC' : 'NPC';
		return (
			<li>
				<form>
					{ character.name } ({ character.init }) ({ isPC })
					<input />
					<button></button>
				</form>
			</li>
		)
	}
}

export default CharacterSingle;