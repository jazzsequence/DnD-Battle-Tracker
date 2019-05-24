const addNewCharacter = document.getElementById( 'add-new-character' );
const characterList = document.getElementById( 'character-list' );
const addNewNPC = document.getElementById( 'add-new-npc' );
const npcList = document.getElementById( 'monster-npc-list' );
const saveAll = document.getElementById( 'save-all-fields' );
const initList = document.getElementById( 'initiative-list' );
let charCount = 0;

/**
 * Builds a unique temporary input to storing a character's information.
 *
 * @return {node} The DOM node for the built list item.
 */
function buildTmpChar() {
	const tmpChar = document.createElement( 'li' );
	const nameInput = document.createElement( 'input' );
	const dexInput = document.createElement( 'input' );
	const button = document.createElement( 'button' );

	// Character name.
	nameInput.setAttribute( 'id',`addChar-${charCount}` );
	nameInput.setAttribute( 'placeholder', 'Character name' );
	nameInput.classList.add( 'character-name');
	tmpChar.appendChild( nameInput );

	// Character Dexterity.
	dexInput.setAttribute( 'id', `charDex-${charCount}` );
	dexInput.setAttribute( 'placeholder', 'Dex' );
	dexInput.setAttribute( 'type', 'number' );
	dexInput.setAttribute( 'min', '1' );
	dexInput.setAttribute( 'max', '30' );
	dexInput.classList.add( 'character-dex' );
	tmpChar.appendChild( dexInput );

	// Add button.
	button.setAttribute( 'id',`add-tmp-char-${charCount}` );
	button.textContent = 'Add'

	// Add the character ID to the new character line.
	tmpChar.setAttribute( 'id', `character-${charCount}` );

	// Add the button to the temp character line.
	tmpChar.appendChild( button );

	// Increment the character ID for the next character.
	charCount++;

	return tmpChar;
}

/**
 * Add a character line.
 */
function addCharacter() {
	const addChar = document.querySelectorAll( '[id^="add-tmp-char-"]' );

	// Loop through added character inputs.
	for ( const tmpCharButton of addChar ) {
		// Add a click handler for this particular input.
		tmpCharButton.addEventListener( 'click', () => {
			const id = getId( tmpCharButton );
			const thisItem = document.getElementById( `character-${id}` );
			const charInput = document.getElementById( `addChar-${id}` );
			const charName = charInput ? charInput.value : false;
			const dexInput = document.getElementById( `charDex-${id}` );
			const dexVal = dexInput ? dexInput.value : false;
			let hasDex = false;
			let hasName = false;

			if ( charName && charName !== 'undefined' && charName !== '' ) {
				// We have a name, so toggle hasName to true.
				hasName = true;

				// Remove the old input and button.
				charInput.remove();

				// Only remove the add button if we have a Dex value.
				if ( dexVal !== 'undefined' && dexVal !== '' ) {
					tmpCharButton.remove();
				} else {
					// We still need to add the dex. Change the button value to indicate that a Dex score is still needed.
					const buttonTxt = `${tmpCharButton.textContent} Dex`;
					tmpCharButton.textContent = buttonTxt;
				}

				buildName( thisItem, id, charName );
			}

			if ( dexVal && dexVal !== 'undefined' && dexVal !== '' ) {
				// We have a Dex, so toggle hasDex to true.
				hasDex = true;

				// Remove the old input and button.
				dexInput.remove();

				// Only remove the add button if we have a character name.
				if ( charName !== 'undefined' && charName !== '' ) {
					tmpCharButton.remove();
				} else {
					// We still need to add the character name. Change the button value to indicate that a name is still needed.
					const buttonTxt = `${tmpCharButton.textContent} Name`;
					tmpCharButton.textContent = buttonTxt;
				}

				buildInitBonus( thisItem, id, dexVal );
			}

			/*
			 * Trigger the initiative input if we have a name and a Dexterity score.
			 *
			 * We don't want these things (specifically Dex) to be undefined or empty, because we don't want to have to dynamically calculate initiative scores on the fly. So only add the input if we have values that are set.
			 */
			if ( hasDex && hasName ) {
				buildInitInput( thisItem, id );
			}
		} );
	}
}

/**
 * Store the character data in the list item for the character.
 *
 * @param  {element} thisItem This is the <li> element for the character.
 * @param  {int}     id       The unique character ID.
 */
function saveCharacterData( thisItem, id ) {
	const charName = document.getElementById( `addChar-${id}` ).textContent;
	const charInit = document.getElementById( `initiative-${id}` ).dataset.initiative;
	const charDex = document.getElementById( `charDex-${id}` ).dataset.dex;
	const charMaxHp = document.getElementById( `hp-${id}` ).dataset.hpMax;
	const charCurrentHp = document.getElementById( `hp-${id}` ).dataset.hpCurrent;
	const childOf = thisItem.parentNode.id;

	thisItem.classList.add( 'character-single' );
	thisItem.setAttribute( 'data-id', id );
	thisItem.setAttribute( 'data-character-name', charName );
	thisItem.setAttribute( 'data-initiative', charInit );
	thisItem.setAttribute( 'data-dex', charDex );
	thisItem.setAttribute( 'data-hp-max', charMaxHp );
	thisItem.setAttribute( 'data-hp-current', charCurrentHp );

	// If the character is a PC, set the character type to PC.
	if ( 'character-list' === childOf ) {
		thisItem.setAttribute( 'data-character-type', 'pc' );
	}

	// If the character is an NPC, set the type to NPC.
	if ( 'monster-npc-list' === childOf ) {
		thisItem.setAttribute( 'data-character-type', 'npc' );
	}
}

/**
 * Save the name to the page as a text element.
 *
 * @param  {element} thisItem This is the <li> element to add the name to.
 * @param  {int}     id       The unique character ID.
 * @param  {string}  charName The character name.
 */
function buildName( thisItem, id, charName ) {
	charSpan = document.createElement( 'span' );
	charSpan.setAttribute( 'id', `addChar-${id}` );
	charSpan.classList.add( 'character-name' );
	charSpan.textContent = charName;
	thisItem.appendChild( charSpan );
}

/**
 * Save the Initiative Bonus to the page as a text element.
 *
 * @param  {element} thisItem This is the <li> element to add the bonus to.
 * @param  {int}     id       The unique character ID.
 * @param  {int}     dexVal   The character's Dexterity score.
 */
function buildInitBonus( thisItem, id, dexVal ) {
	const initBonus = getModifier( dexVal );

	dexSpan = document.createElement( 'span' );
	dexSpan.setAttribute( 'id', `charDex-${id}` );
	dexSpan.setAttribute( 'data-init-bonus', initBonus );
	dexSpan.setAttribute( 'data-dex', dexVal );
	dexSpan.classList.add( 'character-init-bonus' );
	dexSpan.textContent = `Initiative Bonus: ${initBonus}`;
	thisItem.appendChild( dexSpan );
}

/**
 * Builds the initiative input and save button.
 *
 * @param {element} thisItem This is the <li> element to add the initiative die roll input to.
 * @param  {int}    id       The character ID in the list.
 */
function buildInitInput( thisItem, id ) {
	// Build the input.
	initInput = document.createElement( 'input' );
	initInput.setAttribute( 'type', 'number' );
	initInput.setAttribute( 'min', '1' ); // The lowest possible initiative you could roll, e.g. 1 on 1d20.
	initInput.setAttribute( 'max', '20' ); // The highest possible initiative you could roll, e.g. 20 on 1d20.
	initInput.setAttribute( 'id', `charInit-${id}` );
	initInput.setAttribute( 'placeholder', 'd20' );
	initInput.classList.add( 'character-initiative' );
	thisItem.appendChild(initInput);

	// Build a button to save the initiative score.
	saveInit = document.createElement( 'button' );
	saveInit.textContent = 'Save Initiative roll';
	saveInit.setAttribute( 'id', `saveInit-${id}` );
	saveInit.classList.add( 'save-initiative' );
	thisItem.appendChild( saveInit );

	// Add an event listener to the save init button.
	saveInit.addEventListener( 'click', calculateAndSaveInitiative );
}

/**
 * Calculate the initiative for a character.
 *
 * Pass the initiative along to the buildInitiative function which stores the value.
 */
function calculateAndSaveInitiative() {
	const id = getId( this );
	const thisItem = document.getElementById( `character-${id}` );
	const initInput = document.getElementById( `charInit-${id}` );
	const initRoll = initInput.value;
	const initBonus = document.getElementById( `charDex-${id}` ).dataset.initBonus;
	let initiative = 0;

	if ( 'undefined' !== initRoll & '' !== initRoll ) {
		initiative = parseInt( initRoll ) + parseInt( initBonus );

		buildInitiative( initiative, id );
		buildHp( thisItem, id );
	}
}

/**
 * Determines character initiative.
 *
 * @param  {int} initiative The calculated initiative for the character.
 * @param  {int} id         The character ID.
 */
function buildInitiative( initiative, id ) {
	const thisItem = document.getElementById( `character-${id}` );
	const initInput = document.getElementById( `charInit-${id}` );
	const saveInit = document.getElementById( `saveInit-${id}` );

	// Remove the initiative roll inputs.
	initInput.remove();
	saveInit.remove();

	// Build a new text element revealing initiative.
	initDisplay = document.createElement( 'span' );
	initDisplay.textContent = `Initiative: ${initiative}`;
	initDisplay.setAttribute( 'id', `initiative-${id}` );
	initDisplay.setAttribute( 'data-initiative', initiative );
	initDisplay.classList.add( 'initiative-value' );
	thisItem.appendChild( initDisplay );
}

/**
 * Builds an input for tracking HP.
 *
 * @param  {element} thisItem This is the <li> element to add the HP input to.
 * @param  {int}     id       The unique character id.
 */
function buildHp( thisItem, id ) {
	// Add an input to track HP. To start, this will just ask for HP total, but we'll update this with another event listener and change it after the HP total was added.
	hpInput = document.createElement( 'input' );
	hpInput.setAttribute( 'type', 'number' );
	hpInput.setAttribute( 'id', `hp-${id}` );
	hpInput.setAttribute( 'placeholder', 'HP' );
	hpInput.setAttribute( 'data-hp-max', 0 );
	hpInput.setAttribute( 'data-hp-current', 0 );
	hpInput.setAttribute( 'data-hp-last', 0 );
	hpInput.classList.add( 'hp-input' );
	thisItem.appendChild( hpInput );

	// Now we need a button to add for entering/calculating HP.
	hpButton = document.createElement( 'button' );
	hpButton.textContent = 'Enter starting HP';
	hpButton.setAttribute( 'id', `hpButton-${id}` );
	hpButton.classList.add( 'update-hp' );
	thisItem.appendChild( hpButton );

	// Add a span to display an element saying something happened.
	hpUpdateMsg = document.createElement( 'span' );
	hpUpdateMsg.setAttribute( 'id', `hpUpdateMsg-${id}` );
	hpUpdateMsg.classList.add( 'hp-update-msg' );
	hpUpdateMsg.textContent = ''; // Reset the content of the span.
	thisItem.appendChild( hpUpdateMsg );

	hpButton.addEventListener( 'click', addHp );
}

/**
 * Save the character HP.
 */
function addHp() {
	const id = getId( this );
	const thisItem = document.getElementById( `character-${id}` );
	const hpInput = document.getElementById( `hp-${id}` );
	const hpButton = document.getElementById( `hpButton-${id}` );
	const charName = document.getElementById( `addChar-${id}` ).textContent;
	const hpUpdateMsg = document.getElementById( `hpUpdateMsg-${id}` );
	let hpMax = hpInput.value;
	let hpCurrent = hpMax;
	let hpLast = hpMax;

	// Set the max HP to the value that was input first.
	hpInput.setAttribute( 'data-hp-max', hpMax );

	// Set the current HP to the max value because we're initializing the fight.
	hpInput.setAttribute( 'data-hp-current', hpCurrent );

	// Set the last HP to a the max value because we haven't done anything yet.
	hpInput.setAttribute( 'data-hp-last', hpLast );

	// Store all the data for the character in the list item for the character.
	saveCharacterData( thisItem, id );

	// Remove the button.
	hpButton.remove();

	// Disable the input.
	hpInput.setAttribute( 'disabled', 'disabled' );

	// Add a message after we've saved all the data.
	hpUpdateMsg.textContent = `${charName} added.`;
}

/**
 * Handle HP changes.
 */
function updateHp( id, damage ) {
	const hpInput = document.getElementById( `hp-${id}` );
	const charName = document.getElementById( `addChar-${id}` ).textContent;
	const hpUpdateMsg = document.getElementById( `hpUpdateMsg-${id}` );
	const character = document.getElementById( `character-${id}` );
	const hpMax = parseInt( hpInput.dataset.hpMax );
	let hpCurrent = parseInt( hpInput.value );
	let hpLast = hpCurrent;

	// If nothing happened (why are you clicking the update button?)...
	if ( damage === 0 ) {
		// Remove classes.
		hpUpdateMsg.classList.remove( 'healed', 'damaged' );
		hpUpdateMsg.textContent = '🤷‍♂️ Nothing happened.';
	}

	// Get the last HP value from what's currently saved as "current".
	hpInput.setAttribute( 'data-hp-last', hpLast );
	character.setAttribute( 'data-hp-last', hpLast );


	// Subtract damage from the current HP.
	hpCurrent = ( hpCurrent - damage ) ;
	hpInput.value = hpCurrent;

	// If the character was healed...
	if ( damage < 0 ) {
		// If the HP input is greater than the max HP, set the current HP to the max HP.
		if ( hpCurrent > hpMax ) {
			hpCurrent = hpMax;
			hpInput.value = hpMax;
		}

		// Toggle CSS classes.
		hpUpdateMsg.classList.remove( 'damaged' );

		if ( ! hpUpdateMsg.classList.contains( 'healed' ) ) {
			hpUpdateMsg.classList.add( 'healed' );
		}

		// Display message.
		hpUpdateMsg.textContent = `❇️ ${ charName } was healed for ${ ( hpCurrent -hpLast ) } points!`;
	}

	// If the current HP is greater than 0, update the current HP.
	if ( hpCurrent > 0 ) {
		// If the HP input is less than zero, set the current HP to zero.
		if ( parseInt( hpInput.value ) < 0 ) {
			hpCurrent = 0;
			hpInput.value = hpCurrent;
		}

		// Update the current HP.
		character.setAttribute( 'data-current-hp', hpCurrent );

		// If you took damage...
		if ( hpCurrent < hpLast ) {
			hpUpdateMsg.textContent = `💥 ${ charName } took ${ ( hpLast - hpCurrent ) } damage!`;

			/*
			 * Toggle some CSS classes.
			 */
			hpUpdateMsg.classList.remove( 'healed' );

			if ( ! hpUpdateMsg.classList.contains( 'damaged' ) ) {
				hpUpdateMsg.classList.add( 'damaged' );
			}

		}

		// If they were revived, display a message and update their HP.
		if ( hpLast <= 0 ) {
			hpCurrent = hpInput.value;
			character.setAttribute( 'data-current-hp', hpCurrent );
			hpUpdateMsg.classList.remove( 'damaged' );
			hpUpdateMsg.classList.add( 'healed' );
			hpUpdateMsg.textContent = `✨ ${ charName } was revived!`
		}
	} else {
		// Can't have less than zero health.
		hpCurrent = 0;
		hpInput.value = hpCurrent;

		character.setAttribute( 'data-current-hp', hpCurrent )

		hpUpdateMsg.textContent = `${charName} died. 💀`;

		/*
		 * Do CSS things.
		 */
		hpUpdateMsg.classList.remove( 'healed', 'damaged' );

		if ( ! hpUpdateMsg.classList.contains( 'died' ) ) {
			hpUpdateMsg.classList.add( 'died' );
		}
	}
}

/**
 * Remove the Add New and Let's go buttons, but only if we actually have some characters.
 */
function removeButtons() {
	const saveWrapper = document.getElementById( 'save-fields' );
	let error = false;
	let charListIsEmpty = characterList.innerHTML.trim() === '';
	let npcListIsEmpty = npcList.innerHTML.trim() === '';

	// Only remove buttons if both things are empty.
	if ( ! charListIsEmpty && ! npcListIsEmpty ) {
		addNewCharacter.remove();
		addNewNPC.remove();
		saveWrapper.remove();
		error = document.getElementById( 'not-done-error-msg' );

	} else {
		displayNotEmptyMessage();
	}

	if ( error ) {
		error.remove();
	}
}

/**
 * Display a message if we don't actually have all the characters and/or NPCs.
 */
function displayNotEmptyMessage() {
	const container = document.getElementById( 'save-fields' );
	const message = document.createElement( 'p' );
	message.setAttribute( 'id', 'not-done-error-msg' );
	message.classList.add( 'error' );
	message.textContent = 'It doesn\'t look like you\'re quite done. There is some information missing. Please make sure you have all your characters and NPCs and try again.';
	container.appendChild( message );
}

/**
 * Scrapes all the characters on the page and returns their data in an array of objects.
 *
 * @return {array} An array of objects of character data.
 */
function getCharacterData() {
	const characterList = document.getElementsByClassName( 'character-single' );
	let characters = [];

	for ( const character of characterList ) {
		characters.push(
			{
				id: parseInt( character.dataset.id ),
				name: character.dataset.characterName,
				init: parseInt( character.dataset.initiative ),
				maxHp: parseInt( character.dataset.hpMax ),
				currentHp: parseInt( character.dataset.hpCurrent ),
				type: character.dataset.characterType,
			}
		);
	}

	return characters;
}

/**
 * Build the initiative list. Order by initiative first, then by Dex score.
 * Adds an input for recording damage and a button to save the damage input.
 */
function buildCharacterListByInit() {
	const characters = getCharacterData();

	// Sort characters by init score, then by dex.
	characters.sort( ( a, b ) => ( a.init < b.init ) ? 1 : ( a.init === b.init ) ? ( ( a.dex < b.dex ) ? 1 : -1 ) : -1 );

	for ( const character of characters ) {
		const characterEl = document.createElement( 'li' );
		const characterDamage = document.createElement( 'input' );
		const characterDamageBtn = document.createElement( 'button' );

		// Build the list item for the character.
		characterEl.textContent = `${character.name} (${character.init}) [${ character.type.toUpperCase()}]`;
		characterEl.setAttribute( 'id', `character-${character.id}` );
		characterEl.setAttribute( 'data-name', character.name );
		characterEl.setAttribute( 'data-init', character.init );
		characterEl.setAttribute( 'data-max-hp', character.maxHp );
		characterEl.setAttribute( 'data-current-hp', character.currentHp );

		// Add an input for recording damage.
		characterDamage.setAttribute( 'id', `character-${character.id}-damage` );
		characterDamage.setAttribute( 'type', 'number' );

		// Add a button to save input.
		characterDamageBtn.setAttribute( 'id', `character-${character.id}-damage-btn` );
		characterDamageBtn.textContent = 'Record Damage';

		// Add the input and button to the list item.
		characterEl.appendChild( characterDamage );
		characterEl.appendChild( characterDamageBtn );

		// Add the character to the list.
		initList.appendChild( characterEl );

		characterDamageBtn.addEventListener( 'click', () => {
			recordCharacterDamage( character );
		} );
	}
}

function recordCharacterDamage( character ) {
	const damageInput = document.getElementById( `character-${character.id}-damage` );
	const damage = parseInt( damageInput.value );

	// Reset the input.
	damageInput.value = '';

	// Update the Hit Points.
	updateHp( character.id, damage );
}

/**
 * Get the numeric id from an element.
 * This helps match the buttons with the parent list items and sibling inputs.
 *
 * @param  {node} el      Any element (ideally one with an id that contains a decimal).
 * @return {string|false} The numeric part of the id, if one exists.
 */
function getId( el ) {
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
function calculateModifier( score ) {
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
function getModifier( dexScore ) {
	const modValue = calculateModifier( parseInt( dexScore ) );

	if ( modValue > 0 ) {
		return `+${modValue}`;
	}

	return modValue;
}

// Add a click handler to the add new character button.
addNewCharacter.addEventListener( 'click', () => {
	// add the temp character line to the character list.
	characterList.appendChild(buildTmpChar());

	addCharacter();
} );

// Add a similar click handler to the add new NPC button.
addNewNPC.addEventListener( 'click', () => {
	npcList.appendChild( buildTmpChar() );

	addCharacter();

	// When at least one NPC has been added, make the button clickable and listen for a click event on the Let's go! button.
	saveAll.removeAttribute( 'disabled' );
	saveAll.addEventListener( 'click', () => {
		// Remove the Add New character buttons.
		removeButtons();
		// Build the character initiative list.
		buildCharacterListByInit();
	} );
} );
