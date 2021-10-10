import React, { useReducer } from 'react';
import todoReducer from './todoReducer';
import TodoContext from './todoContext';
import { COMPLETETASK, ADDTASK, CLEARCURRENT } from '../types';
const TodoState = ({ children }) => {
	const initialState = {
		tasks: [
			{
				id: 1,
				title: 'Finish sdfsdf todo app',
				priority: 7,
				category: 'personal',
				created: 'Fri Oct 08 2021',
				isComplete: false,
			},
			{
				id: 2,
				title: 'Finishsdfsdfsf todo app',
				priority: 7,
				category: 'personal',
				created: 'Fri Oct 08 2021',
				isComplete: false,
			},
			{
				id: 3,
				title: 'Finissdfsdfsh todo app',
				priority: 7,
				category: 'personal',
				created: 'Fri Oct 08 2021',
				isComplete: false,
			},
			{
				id: 4,
				title: 'Finish sdfsdfsdfstodo app',
				priority: 7,
				category: 'personal',
				created: 'Fri Oct 08 2021',
				isComplete: false,
			},
			{
				id: 5,
				title: 'Finishsdfsfsf todo app',
				priority: 7,
				category: 'professional',
				created: 'Fri Oct 08 2021',
				isComplete: false,
			},
		],
		current: null
	};
	const [state, dispatch] = useReducer(todoReducer, initialState);

	const completeTask = (id) => {
		dispatch({ type: COMPLETETASK, payload: id });
	};

	const addTask = (todo) => {
		// todo maybe auth or something here
		dispatch({type: ADDTASK, payload: todo})
	}

	const clearCurrent = () => {
		dispatch({type: CLEARCURRENT})
	}

	const value = {
		tasks: state.tasks,
		current: state.current,
		completeTask,
		clearCurrent,
		addTask
	};
	return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoState;
