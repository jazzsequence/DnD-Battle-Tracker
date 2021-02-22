import React from 'react';

class DamageInputForm extends React.Component {
	damageRef = React.createRef();

	recordDamage = event => {
		event.preventDefault();

		const damage = parseInt( this.damageRef.current.value );

		this.props.updateHp( damage, this.props.hp );

		event.currentTarget.reset();
	}

	render() {
		return (
			<form className="record-damage" onSubmit={ this.recordDamage }>
				<input
					id={ `character-${this.props.id}-damage` }
					name="damage"
					type="number"
					ref={ this.damageRef }
					placeholder="Damage"
					required
				/>
				<button
					id={`character-${this.props.id}-damage-btn`}
				>Record Damage</button>
			</form>
		)
	}
}

export default DamageInputForm;