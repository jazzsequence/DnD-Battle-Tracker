import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyCVFXqaimZtL7N2x4Wg-reVeVHj4J0s3uA",
	authDomain: "dnd-battle-tracker-60a58.firebaseapp.com",
	databaseURL: "https://dnd-battle-tracker-60a58-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass( firebaseApp.database() );

export { firebaseApp };

export default base;