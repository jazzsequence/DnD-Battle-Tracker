import React from 'react';
import Header from './Header';
import Initiative from './Initiative';
import Characters from './Characters';
import NPCs from './NPCs';
import Save from './Save';

class App extends React.Component {
	render() {
		return (
			<>
			<Header />
			<div className="battle-tracker">
				<Initiative />
				<Characters />
				<NPCs />
				<Save />
			</div>
			</>
		)
	}
}

export default App;