import React, { useReducer } from 'react';
import todoReducer from './todoReducer';
import TodoContext from './todoContext';
import { doc, addDoc, collection, updateDoc, arrayUnion, query, where, getDocs } from 'firebase/firestore';
import { COMPLETETASK, ADDTASK, CLEARCURRENT, UPDATE_TASK, CHANGE_GROUP, SET_TASKS } from '../types';
import { db } from '../../Config';
const TodoState = ({ children }) => {
	let initialState = {
		tasks: [
			{
				id: 1,
				title: 'Add to Todo list by signing up',
				priority: 10,
				category: 'personal',
				created: 'Fri Oct 08 2021',
				isComplete: false,
			},
		],
		current: null,
		group: null,
	};

	const setTodos = async (id) => {
		const q = query(collection(db, 'tasks'), where('owner', '==', id));
		const querySnapshot = await getDocs(q);
		const tasks = [];
		querySnapshot.forEach((doc) => {
			tasks.push({ id: doc.id, ...doc.data() });
		});
		dispatch({ type: SET_TASKS, payload: tasks });
	};

	const [state, dispatch] = useReducer(todoReducer, initialState);

	const completeTask = async (id) => {
		dispatch({ type: COMPLETETASK, payload: id });
		await updateDoc(doc(db, 'tasks', id), { isComplete: true });
		// todo remove from users collection
	};

	const addTask = async (todo) => {
		dispatch({ type: ADDTASK, payload: todo });
		const result = await addDoc(collection(db, 'tasks'), { ...todo });
		await updateDoc(doc(db, 'users', todo.owner), {
			tasks: arrayUnion(result.id),
		});
	};

	const updateTask = async (task) => {
		await updateDoc(doc(db, 'tasks', task.id), { ...task });
		dispatch({ type: UPDATE_TASK, payload: task });
	};

	const clearCurrent = () => {
		dispatch({ type: CLEARCURRENT });
	};

	const changeGroup = (group) => {
		dispatch({ type: CHANGE_GROUP, payload: group });
	};

	const value = {
		tasks: state.tasks,
		current: state.current,
		group: state.group,
		completeTask,
		clearCurrent,
		addTask,
		updateTask,
		changeGroup,
		setTodos,
	};
	return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoState;
