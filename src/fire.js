// import {initializeApp} from 'firebase/app';
// import { getAuth } from "firebase/auth";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAdG_Z6-hYXq1OkMtisK2RjZXIvVo1YLvc",
    authDomain: "mymovieapp-2a697.firebaseapp.com",
    projectId: "mymovieapp-2a697",
    storageBucket: "mymovieapp-2a697.appspot.com",
    messagingSenderId: "644016246555",
    appId: "1:644016246555:web:31d2ad65607a3477e78dbe",
    measurementId: "G-L32DZ8PD8P"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// export const auth = getAuth(app);
export default app;