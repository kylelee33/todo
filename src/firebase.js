import * as firebase from 'firebase';
const config = {
  apiKey: "AIzaSyBY7UvO3aKalwG4NDuzo9wzOgknrT7YESs",
  authDomain: "todo-app-bef75.firebaseapp.com",
  databaseURL: "https://todo-app-bef75.firebaseio.com",
  projectId: "todo-app-bef75",
  storageBucket: "todo-app-bef75.appspot.com",
  messagingSenderId: "169963455549"
}
firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos")