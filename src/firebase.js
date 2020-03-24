import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyA6Kl3akJ_eeaNUaSDh-2Jzcrel4kCuc4I",
    authDomain: "todoist-app-np.firebaseapp.com",
    databaseURL: "https://todoist-app-np.firebaseio.com",
    projectId: "todoist-app-np",
    storageBucket: "todoist-app-np.appspot.com",
    messagingSenderId: "491288207822",
    appId: "1:491288207822:web:3444ad820d966a35514b9f"

});

export { firebaseConfig as firebase };