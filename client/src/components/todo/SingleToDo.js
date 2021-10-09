import React from 'react';

const SingleToDo = ({ task }) => {
	return (
		<div className='col todoCol rounded rounded-3 p-2'>
			<div className='container'>
				<div className='row text-wrap lh-lg d-flex align-items-center'>
					<div className='col-2'>
						<button className='btn'>🛠</button>
					</div>
					<div className='col-3'>{task.title}</div>
					<div className='col-2'>{task.priority}</div>
					<div className='col-3'>{task.created}</div>
					<div className='col-2'>
						<button className='btn'>☠</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleToDo;
