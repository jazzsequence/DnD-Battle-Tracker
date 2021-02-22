import React from 'react';

class SaveButton extends React.Component {

	render() {
		return (
			<button
				id="save-all-fields"
				disabled={ ! this.props.battleCanStart }
				onClick={ this.props.updateInitOrder }
			>Let's go! 💥</button>
		)
	}
}

export default SaveButton;