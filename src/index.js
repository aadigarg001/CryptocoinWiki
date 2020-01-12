import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Rendering Component

//this is the app component

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
