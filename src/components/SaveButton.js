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
			>Let's go! 💥</button>
			>{ this.getButtonText() }</button>
		)
	}
}

export default SaveButton;