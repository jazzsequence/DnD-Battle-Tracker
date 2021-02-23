import React from 'react';

class RecordDamageButton extends React.Component {
	damageRef = React.createRef();

	recordDamage = event => {
		event.preventDefault();

		const damage = parseInt( this.damageRef.current.value );

		this.props.updateHp( damage, this.props.hp );

		event.currentTarget.reset();
	}

	render() {
		return (
			<button
				id={`character-${this.props.id}-damage-btn`}
				onClick={ () => this.recordDamage }
			>Record Damage</button>
		)
	}
}

export default RecordDamageButton;