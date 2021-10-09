import React from 'react';
import Navb from './components/layout/Navb';
import Home from './components/pages/Home';
import './App.css';
import TodoState from './context/todoContext/TodoState';
const App = () => {
	return (
		<>
			<TodoState>
				<Navb />
				<Home />
			</TodoState>
		</>
	);
};

export default App;
