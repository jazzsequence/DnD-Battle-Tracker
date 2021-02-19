import React from 'react';

class AddNewButton extends React.Component {

	render() {
		const btnType = this.props.type;
		return (
			<button
				id={`add-new-${btnType}`}
				onClick={ () => {
					console.log( `button type is ${btnType}` );
					const list = document.getElementById( `${btnType}-list` );
					console.log(list);
					list.push( this.props.buildCharacterInput );
				} }
			>Add new</button>
		)
	}
}

export default AddNewButton;