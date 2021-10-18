import React from 'react';
import Navb from './components/layout/Navb';
import Home from './components/pages/Home';
import TodoState from './context/todoContext/TodoState';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/pages/Auth/Login';
import Logout from './components/pages/Auth/Logout';
import SignUp from './components/pages/Auth/SignUp';
import AuthState from './context/authContext/AuthState';

const App = () => {
	return (
		<TodoState>
			<AuthState>
				<Router>
					<Navb />
					<div className='container'>
						<Switch>
							<Route exact path='/' component={Home} />
							<Route exact path='/login' component={Login} />
							<Route exact path='/logout' component={Logout} />
							<Route exact path='/signup' component={SignUp} />
						</Switch>
					</div>
				</Router>
			</AuthState>
		</TodoState>
	);
};

export default App;
