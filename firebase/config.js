import * as firebase from 'firebase';

const firebaseConfig = {
   apiKey: "AIzaSyC_g0p_G7Yxvd3f8KAq6mqizlqmc2ZIHMQ",
    authDomain: "demoapplication-5c92a.firebaseapp.com",
    databaseURL: "https://demoapplication-5c92a.firebaseio.com",
    projectId: "demoapplication-5c92a",
    storageBucket: "demoapplication-5c92a.appspot.com",
    messagingSenderId: "509136689936",
    appId: "1:509136689936:web:ec7c2e30c3dd0d46e76395",
    measurementId: "G-0SELHV8F8X"
};

firebase.initializeApp(firebaseConfig);

export default firebase;