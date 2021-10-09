import React from 'react';
import SingleToDo from './SingleToDo';
import { useTodos } from '../../context/todoContext/todoContext';
const ToDoList = () => {
	const { tasks } = useTodos()
	return (
		<div className='row row-cols-1 g-3 text-center p-2 todoRow'>
			{tasks.map((task) => (
				<SingleToDo task={task} />
			))}
		</div>
	);
};

export default ToDoList;
