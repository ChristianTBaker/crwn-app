import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyC0bpg9LzyR4D5jG7_f0YUP7P5TVUFiGxY",
  authDomain: "crwn-db-784a0.firebaseapp.com",
  databaseURL: "https://crwn-db-784a0.firebaseio.com",
  projectId: "crwn-db-784a0",
  storageBucket: "crwn-db-784a0.appspot.com",
  messagingSenderId: "847002651376",
  appId: "1:847002651376:web:d3805f3fd7beaded295035",
  measurementId: "G-3378FW8EBN"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase