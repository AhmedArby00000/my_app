import React from 'react';
import ReactDOM from 'react-dom';

// import {initializeApp} from 'firebase/app';
// import {getAnalytics} from 'firebase/analytics';

import TodoApp from './App';


// Initialize Firebase
// getAnalytics(initializeApp({
//     apiKey: "AIzaSyDYR30Sip34qbZHb8vPBNe4x1MXLAJr3q0",
//     authDomain: "todo-app-ahmed.firebaseapp.com",
//     projectId: "todo-app-ahmed",
//     storageBucket: "todo-app-ahmed.appspot.com",
//     messagingSenderId: "703203036828",
//     appId: "1:703203036828:web:c4c3431fe95da7a2fee759",
//     measurementId: "G-TTVR05V2V6"
// }));

ReactDOM.render(<TodoApp/>, document.getElementById('root'));
