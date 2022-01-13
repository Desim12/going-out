// Import the functions you need from the SDKs you need
import * as firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdTxAq8rFaD3p_hb03ADzFexkdkvFswY0",
  authDomain: "going-out-55eab.firebaseapp.com",
  projectId: "going-out-55eab",
  storageBucket: "going-out-55eab.appspot.com",
  messagingSenderId: "879708603527",
  appId: "1:879708603527:web:a531de56a16b126203e422",
  measurementId: "G-6DE7Q3RRNB"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig)
} else{
  app = firebase.app()
}
const auth = firebase.auth()

export { auth };