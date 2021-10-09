import React from 'react'

const SingleToDo = ({task}) => {
	return (
		<div className='col todoCol rounded rounded-3 p-2'>
		<p>Task : {task.task}</p>
		<p>Priority : {task.priority}</p>
		<p>Created : {String(task.created)}</p>
	</div>
	)
}

export default SingleToDo
