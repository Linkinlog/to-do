import React from 'react';
import ToDoList from '../todo/ToDoList';

const Home = () => {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col'>
					<h2 className='text-center'>To-Do List</h2>
					<ToDoList />
				</div>
			</div>
		</div>
	);
};

export default Home;
