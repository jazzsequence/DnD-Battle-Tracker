import React from 'react';
import Header from './Header';
import Initiative from './Initiative';
import Characters from './Characters';
import NPCs from './NPCs';

class App extends React.Component {
	render() {
		return (
			<>
			<Header />
			<div className="battle-tracker">
				<Initiative />
				<Characters />
				<NPCs />
			</div>
			</>
		)
	}
}

export default App;