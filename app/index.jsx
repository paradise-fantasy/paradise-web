import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

const appRoot = document.createElement('div');
appRoot.id = 'app-root';
document.body.appendChild(appRoot);
ReactDOM.render(<App />, appRoot);
