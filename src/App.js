import React from 'react';
import logo from './logo.svg';
import Main from './components/layouts/Main';
import Dashboard from './components/Dashboard';
import Blank from './components/Blank';
import Login from './components/Login';
import Register from './components/Register';
import {
	BrowserRouter as Router,Route,Switch
} from "react-router-dom";


function App() {
	return (
		<Router>
		<Switch>

		<Route path='/' exact component={Login} />
		<Route path='/sign-in' exact component={Login} />
		<Route path='/sign-up' exact component={Register} />

		<Main>
		<Route>
		<Route path='/dashboard' exact component={Dashboard} />
		<Route path='/blank' exact component={Blank} />
		</Route>
		</Main>

		</Switch>
		</Router>

		);
}

export default App;
