import * as firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAMpXpmyMMSq04NdPCdscfwGLJBujRfRJE",
    authDomain: "e-commerce-with-react-21136.firebaseapp.com",
    projectId: "e-commerce-with-react-21136",
    storageBucket: "e-commerce-with-react-21136.appspot.com",
    messagingSenderId: "501296922084",
    appId: "1:501296922084:web:f053ff0aa67348b392dbf1",
    measurementId: "G-63HE1SFEGY"
  };
  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }