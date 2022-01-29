import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './src/App';
import reportWebVitals from './src/reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


const express = require ("express");
const app = express ();
const port = process.env.PORT  || 4000;
app.listen(port);
app.get("/",(req, res, )=>{res.send("la pagina Inicio");});
console.log( `Listen on Port ${port}`);


reportWebVitals(console.log);