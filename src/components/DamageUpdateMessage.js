import React from 'react';

class DamageUpdateMessage extends React.Component {
	render() {
		return (
			<span id={ `hpUpdateMsg-${this.props.id}` } className="hp-update-msg">{ this.props.message }</span>
		)
	}
}

export default DamageUpdateMessage;