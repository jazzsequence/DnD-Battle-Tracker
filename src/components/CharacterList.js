import React from 'react';
import CharacterSingle from './CharacterSingle';

class CharacterList extends React.Component {

	render() {
		console.log(this.props.characters);
		const listType = this.props.type;
		return (
			<ul id={`${listType}-list`}>
			</ul>
		)
	}
}

export default CharacterList;