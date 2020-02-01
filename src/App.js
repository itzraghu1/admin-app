import React from 'react';
import logo from './logo.svg';
import Main from './components/layouts/Main';
import {
	BrowserRouter as Router,
} from "react-router-dom";


function App() {
	return (
		<Router>
		<Main />
		</Router>
		);
	}

	export default App;
