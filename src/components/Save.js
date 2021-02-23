import React from 'react';
import SaveButton from './SaveButton';

class Save extends React.Component {

	render() {
		const maybeHideButton = this.props.battleStarted ? 'hidden' : '';

		return (
			<div className="start" id="save-fields">
				<button
					className={`load-sample-encounter ${maybeHideButton}`}
					onClick={ this.props.loadSampleEncounter }
				>Load Sample Encounter</button>

				<SaveButton
					battleCanStart={ this.props.battleCanStart }
					updateBattleStarted={ this.props.updateBattleStarted }
					battleStarted={ this.props.battleStarted }
					resetEncounter={ this.props.resetEncounter }
				/>
				<p className="description" id="save-all-fields-desc">Click the "Let's Go!" button when all characters have been added to start the battle!</p>
			</div>
		)
	}
}

export default Save;