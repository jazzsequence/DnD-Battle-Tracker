import React from 'react';

class AddNewButton extends React.Component {

	render() {
		const btnType = this.props.type;
		return ( <button id={`add-new-${btnType}`}>Add new</button> )
	}
}

export default AddNewButton;