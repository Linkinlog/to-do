import React, { useState } from 'react';
import { useTodos } from '../../context/todoContext/todoContext';
import { Button, Modal, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const SingleToDo = ({ task }) => {
	const { completeTask, updateTask } = useTodos();
	const [show, setShow] = useState(false);
	const [todo, setTodo] = useState(task);
	const editTodo = (e) => {
		e.preventDefault();
		try {
			updateTask(todo);
		} catch (error) {
			console.error(error.message);
		}
	};
	const onChange = (e) => setTodo({ ...todo, [e.target.name]: e.target.value });
	const { title, priority, category } = todo;
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const complete = () => {
		completeTask(task.id);
	};
	return (
		<div>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header>
					<Modal.Title>Edit Task</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form className='row g-3 shadow1 my-2 py-2 rounded rounded-3' onSubmit={editTodo}>
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
							<button className='btn shadow1' onClick={handleClose} type='submit'>
								📝 Edit Task
							</button>
						</div>
					</form>
				</Modal.Body>
			</Modal>
			<Col className='todoCol rounded rounded-3 my-4 p-2'>
				<Container>
					<Row className='text-muted'>
					<Col xs={{ span: 2, offset: 3 }} xl={{ span: 2, offset:3 }}>
							Title
						</Col>
						<Col xs={{ span: 2 }} xl={{ span: 2, offset: 1 }}>
							Priority
						</Col>
						<Col xs={{ span: 2 }}>
							<span className='ps-3'>Created</span>
						</Col>
					</Row>
					<Row className='text-wrap lh-lg d-flex align-items-center'>
						<Col xs={2}>
							<Button variant='outline' onClick={handleShow}>
								🛠
							</Button>
						</Col>
						<Col xs={4}>{task.title}</Col>
						<Col xs={2}>{task.priority}</Col>
						<Col xs={2}>{task.created}</Col>
						<Col xs={2}>
							<Link to='/'>
								<Button variant='outline' onClick={complete}>
									☠
								</Button>
							</Link>
						</Col>
					</Row>
				</Container>
			</Col>
		</div>
	);
};

export default SingleToDo;
