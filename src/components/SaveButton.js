import React from 'react';

class SaveButton extends React.Component {

	getButtonText = () => {
		if ( ! this.props.battleStarted ) {
			return "Let's go! 💥";
		}

		return "Save Characters and Reset Battle 💾"
	}

	render() {
		return (
			<button
				id="save-all-fields"
				disabled={ ! this.props.battleCanStart }
				onClick={ () => {
					if ( ! this.props.battleStarted ) {
						// If the battle hasn't started yet, this button will handle kicking it off.
						return this.props.updateBattleStarted()
					} else {
						// Otherwise, the button will save the characters but reset the encounter/npcs.
						return this.props.resetEncounter()
					}
				} }
			>{ this.getButtonText() }</button>
		)
	}
}

export default SaveButton;