import React from 'react';

class CharacterList extends React.Component {

	render() {
		const listType = this.props.type;
		return (
			<ul id={`${listType}-list`}></ul>
		)
	}
}

export default CharacterList;