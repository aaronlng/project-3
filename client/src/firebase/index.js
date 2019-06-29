import firebase from "firebase/app";
import "firebase/storage";

var config = {
    apiKey: process.env.firebaseAPIkey,
    authDomain: "project-3-9aeae.firebaseapp.com",
    databaseURL: process.env.firebaseURL,
    projectId: "project-3-9aeae",
    storageBucket: "project-3-9aeae.appspot.com",
    messagingSenderId: "752723831088",
    appId: "1:752723831088:web:a5f882906c83666f"
};

firebase.initializeApp(config);

const storage = firebase.storage();

export {
    storage, firebase as default
}