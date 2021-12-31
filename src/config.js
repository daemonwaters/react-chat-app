import { getAuth } from '@firebase/auth';
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDGuzIUAK3xbeI1Ii9bTa7ThgDE6gViRIA",
    authDomain: "chat-app-ee563.firebaseapp.com",
    projectId: "chat-app-ee563",
    storageBucket: "chat-app-ee563.appspot.com",
    messagingSenderId: "466637541601",
    appId: "1:466637541601:web:d384ef01bcfe3d4be927a0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);


export {db,auth};