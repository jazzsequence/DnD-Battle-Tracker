import React from 'react';
import CharacterSingle from './CharacterSingle';

class CharacterList extends React.Component {

	getCharacters = ( characterList ) => {
		if ( characterList ) {
			return (
				Object.keys( characterList )
					.map( key => <CharacterSingle
						key={ key }
						details={ characterList[key] }
						type={ this.props.type }
						battleStarted={ this.props.battleStarted }
					/> )
			)
		}

		return null;
	}

	render() {
		const listType = this.props.type;
		return (
			<ul id={`${listType}-list`}>
				{ this.getCharacters( this.props.characters ) }
			</ul>
		)
	}
}

export default CharacterList;