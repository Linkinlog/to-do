import React, { useReducer } from 'react';
import todoReducer from './todoReducer';
import TodoContext from './todoContext';

const TodoState = ({ children }) => {
	const initialState = {
		tasks: [
			{
				title: 'Finish todo app',
				priority: 7,
				created: 'Fri Oct 08 2021',
			},
			{
				title: 'Finish todo app',
				priority: 7,
				created: 'Fri Oct 08 2021',
			},
			{
				title: 'Finish todo app',
				priority: 7,
				created: 'Fri Oct 08 2021',
			},
			{
				title: 'Finish todo app',
				priority: 7,
				created: 'Fri Oct 08 2021',
			},
			{
				title: 'Finish todo app',
				priority: 7,
				created: 'Fri Oct 08 2021',
			},
		],
	};
	const [state, dispatch] = useReducer(todoReducer, initialState);
	const value = {
		tasks: state.tasks,
	};
	return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoState;
