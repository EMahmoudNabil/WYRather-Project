// React imports
import React from 'react';
import ReactDOM from 'react-dom';
// Redux imports
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Custom imports
import App from './components/App';
import Reducer from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import middleware from './middleware';

// Create the Redux Store using the defined Reducer and Middleware function
const store = createStore(Reducer, middleware);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
