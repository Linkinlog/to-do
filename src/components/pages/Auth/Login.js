import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/authContext/authContext';

const Login = (props) => {
	const email = useRef();
	const password = useRef();
	const loginBtn = useRef()
	const [alert, setAlert] = useState();
	const { logIn } = useAuth();
	const popAlert = (alert, type) => {
		setAlert({ alert, type });
		setTimeout(() => {
			setAlert(null);
		}, 2500);
	};
	const onSubmit = async (e) => {
		e.preventDefault();
		loginBtn.current.classList.add('disabled')
		try {
			await logIn(email.current.value, password.current.value);
		} catch (error) {
			return popAlert(error.message, 'danger');
		}
		popAlert('Signing you in...', 'primary')
		setTimeout(() => {
			props.history.push('/')
		}, 50)
	};
	return (
		<div className='col-md-6 offset-md-3'>
			<div className='card shadow1 rounded rounded-3'>
				<div className='card-body text-center'>
					{alert && <div className={`alert alert-${alert?.type} m-2`}>{alert?.alert}</div>}
					<h5 className='card-title'>Log In</h5>
					<form onSubmit={onSubmit}>
						<div className='mb-3'>
							<label htmlFor='email' className='form-label'>
								Email
							</label>
							<input type='text' className='form-control' name='email' autoComplete='username' ref={email} id='email' placeholder='Email' />
						</div>
						<div className='mb-3'>
							<label htmlFor='password' className='form-label'>
								Password
							</label>
							<input type='password' className='form-control' name='password' id='password' ref={password} autoComplete='current-password' placeholder='Password' />
						</div>
						<button className='btn shadow1' ref={loginBtn} type='submit'>
							Log In
						</button>
					</form>
				</div>
				<div className='text-center'>
					<p>
						Need an account? <Link to='/signup'>Sign up</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
