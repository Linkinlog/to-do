import React from 'react';

const ToDoList = () => {
	const todos = [
		{
			task: 'Finish todo app',
			priority: 7,
			created: 'Fri Oct 08 2021',
		},
		{
			task: 'Finish todo app',
			priority: 7,
			created: 'Fri Oct 08 2021',
		},
		{
			task: 'Finish todo app',
			priority: 7,
			created: 'Fri Oct 08 2021',
		},
		{
			task: 'Finish todo app',
			priority: 7,
			created: 'Fri Oct 08 2021',
		},
	];
	return (
		<div className='row row-cols-1 g-3 text-center px-2'>
			{todos.map((task) => (
				<div className='col todoCol rounded rounded-3 p-2'>
					<p>Task : {task.task}</p>
					<p>Priority : {task.priority}</p>
					<p>Created : {String(task.created)}</p>
				</div>
			))}
		</div>
	);
};

export default ToDoList;
