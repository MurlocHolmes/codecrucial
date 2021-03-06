import React from 'react'; // import the main react dependency
import ReactDOM from 'react-dom'; // import reactDOM
import App from './components/App.jsx'; // import the main app component
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import AppStore from './components/redux/reducers';
import './styles.scss';


let store = createStore(AppStore)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
);
