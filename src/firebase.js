import firebase from 'firebase'
const firebaseConfig = {
 ///  paste ur firebase  cong fig data here
};
const firebaseApp  = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()


export { auth, provider }
export default db