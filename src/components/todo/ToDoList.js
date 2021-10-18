import React from 'react';
import SingleToDo from './SingleToDo';
import { useTodos } from '../../context/todoContext/todoContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ToDoList = () => {
	let { tasks, group } = useTodos();
	if(group) (tasks = tasks?.filter(task => task.category === group))
	return (
		<div className='row row-cols-1 text-center p-2 todoRow'>
			<TransitionGroup>
				{tasks?.map(
					(task) =>
						!task.isComplete && (
							<CSSTransition key={task.id} timeout={750} classNames='item'>
								<SingleToDo task={task} />
							</CSSTransition>
						),
				)}
			</TransitionGroup>
		</div>
	);
};

export default ToDoList;
