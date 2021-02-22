import React from 'react';
import SaveButton from './SaveButton';

class Save extends React.Component {

	render() {
		return (
			<div className="start" id="save-fields">
				<SaveButton
					battleCanStart={ this.props.battleCanStart }
					updateBattleStarted={ this.props.updateBattleStarted }
				/>
				<p className="description" id="save-all-fields-desc">Click the button when all characters have been added to start the battle!</p>
			</div>
		)
	}
}

export default Save;