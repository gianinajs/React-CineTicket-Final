import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAprnYGn8KiHilyqb0HTifVpepX-sTG7sQ",
  authDomain: "camada-31140-dc642.firebaseapp.com",
  projectId: "camada-31140-dc642",
  storageBucket: "camada-31140-dc642.appspot.com",
  messagingSenderId: "651298775402",
  appId: "1:651298775402:web:f389bd74e154c45ab28513"
};

initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();