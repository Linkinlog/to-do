import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/authContext/authContext';
import { useTodos } from '../../context/todoContext/todoContext';

const AddToDo = () => {
	const { addTask, current, clearCurrent, setTodos } = useTodos();
	const { user } = useAuth();
	const date = new Date()
	const blankTodo = {
		title: '',
		priority: '',
		category: 'personal',
		owner: user.uid,
		created: date.toDateString(),
		isComplete: false
	};
	const [todo, setTodo] = useState(blankTodo);

	useEffect(() => {
		if (current !== null) {
			setTodo(current);
		} else {
			setTodo(blankTodo);
		}
		// eslint-disable-next-line
	}, [current]);

	const onChange = (e) => setTodo({ ...todo, [e.target.name]: e.target.value });

	const { title, priority, category } = todo;

	const addTodo = (e) => {
		e.preventDefault();
		try {
			addTask(todo);
			clearAll();
		} catch (error) {
			return console.error(error.message);
		}
		setTodos(user.uid)
	};
	const clearAll = () => {
		clearCurrent();
		setTodo(blankTodo);
	};
	return (
		<form className='row g-3 shadow1 my-2 py-2 rounded rounded-3' onSubmit={addTodo}>
			<div className='col-md-12'>
				<label htmlFor='title' className='form-label'>
					Task 👨🏽‍💻
				</label>
				<input type='text' className='form-control' placeholder='Task name' value={title} onChange={onChange} name='title' id='title' required />
				<div className='valid-feedback'>Looks good!</div>
			</div>
			<div className='col-md-6'>
				<label htmlFor='priority' className='form-label'>
					Priority 🤷🏽‍♂️
				</label>
				<input type='number' className='form-control' value={priority} onChange={onChange} name='priority' id='priority' required />
				<div className='invalid-feedback'>Please provide a valid priority level.</div>
			</div>
			<div className='col-md-6'>
				<label htmlFor='category' className='form-label'>
					Category
				</label>
				<div className='form-check'>
					<input className='form-check-input' type='radio' value='personal' name='category' id='personal' onChange={onChange} checked={category === 'personal'} />
					<label className='form-check-label' htmlFor='personal'>
						Personal
					</label>
				</div>

				<div className='form-check'>
					<input className='form-check-input' type='radio' value='professional' name='category' id='professional' onChange={onChange} checked={category === 'professional'} />
					<label className='form-check-label' htmlFor='professional'>
						Professional
					</label>
				</div>
				<div className='invalid-feedback'>Please provide a valid category.</div>
			</div>
			<div className='col-12'>
				<button className='btn shadow1' type='submit'>
					➕ Add Task
				</button>
			</div>
		</form>
	);
};

export default AddToDo;
