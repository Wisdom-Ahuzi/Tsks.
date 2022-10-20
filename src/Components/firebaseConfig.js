import React from 'react'
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyBfVjptCL5kp6OdEg2Ib3LArB24_pwy2-I",
    authDomain: "todo-app-37847.firebaseapp.com",
    projectId: "todo-app-37847",
    storageBucket: "todo-app-37847.appspot.com",
    messagingSenderId: "753340216076",
    appId: "1:753340216076:web:ad8a1f3d981d955e0d4f29",
    measurementId: "G-75RYW131M6"
  };

export default initializeApp(firebaseConfig);