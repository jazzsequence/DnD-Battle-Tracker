import React from 'react';
import Header from './Header';
import { generateGuid } from '../helpers';

class Home extends React.Component {
	encounterInput = React.createRef();

	goToEncounter = event => {
		event.preventDefault();

		const encounterGuid = this.encounterInput.current.value;

		this.props.history.push( `/${encounterGuid}` );
	}

	render() {
		return (
			<>
			<Header />
			<div className="battle-tracker-home">
				<form className="start-encounter" onSubmit={ this.goToEncounter }>
					<input
						type="hidden"
						ref={ this.encounterInput }
						defaultValue={ generateGuid() }
					/>
					<button type="submit">Build your encounter ⚔️</button>
				</form>
			</div>
		</>
		)
	}
}

export default Home;