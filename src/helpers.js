/**
 * Helper functions for the app.
 */

/**
 * Get the numeric id from an element.
 * This helps match the buttons with the parent list items and sibling inputs.
 *
 * Note: This might not be needed in the end because we may be able to pass character IDs as props.
 *
 * @param  {node} el      Any element (ideally one with an id that contains a decimal).
 * @return {string|false} The numeric part of the id, if one exists.
 */
export function getId( el ) {
	const id = el.getAttribute( 'id' );

	if ( id !== typeof undefined ) {
		return id.replace( /[^0-9]+/g, '' );
	}

	return false;
}

/**
 * Take an ability score and return the modifier bonus.
 *
 * The ability score must be greater than 1 and up to 30.
 *
 * These scores are taken from the Ability Scores and Modifiers table on page 13 of the D&D 5e Player's Handbook.
 *
 * @param  {int} score An ability score.
 * @return {int}       The modifier for that ability score.
 */
export function calculateModifier( score ) {
	switch( score ) {
		case 1:
			return -5;
		case 2:
		case 3:
			return -4;
		case 4:
		case 5:
			return -3;
		case 6:
		case 7:
			return -2;
		case 8:
		case 9:
			return -1;
		case 10:
		case 11:
			return 0;
		case 12:
		case 13:
			return 1;
		case 14:
		case 15:
			return 2;
		case 16:
		case 17:
			return 3;
		case 18:
		case 19:
			return 4;
		case 20:
		case 21:
			return 5;
		// At this point we get into epic levels that are less common.
		case 22:
		case 23:
			return 6;
		case 24:
		case 25:
			return 7;
		case 26:
		case 27:
			return 8;
		case 28:
		case 29:
			return 9;
		case 30:
			return 10;
		default:
			return 0;
	}
}

/**
 * Get the modifier with a leading + (or - for negative values).
 *
 * @param  {int} dexScore The Dex score.
 * @return {string}       The modifier.
 */
export function getModifier( dexScore ) {
	const modValue = calculateModifier( parseInt( dexScore ) );

	if ( modValue > 0 ) {
		return `+${modValue}`;
	}

	return modValue;
}
