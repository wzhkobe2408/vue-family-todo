import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAnOmJ4Z2PdSCEu3oF852zXe2ddv1iWeMs",
  authDomain: "turnout-f23de.firebaseapp.com",
  databaseURL: "https://turnout-f23de.firebaseio.com",
  projectId: "turnout-f23de",
  storageBucket: "",
  messagingSenderId: "479322612238"
};

export const firebaseApp=firebase.initializeApp(config)
export const eventsRef=firebaseApp.database().ref().child('events')