import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/authContext/authContext';

const SignUp = (props) => {
	const { signUp } = useAuth();
	const email = useRef('');
	const password = useRef('');
	const passwordConfirm = useRef('');
	const [alert, setAlert] = useState();
	const popAlert = (alert, type) => {
		setAlert({ alert, type });
		setTimeout(() => {
			setAlert(null);
		}, 2500);
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		if (password.current.value !== passwordConfirm.current.value) return popAlert('Passwords do not match!', 'danger');
		try {
			await signUp(email.current.value, password.current.value);
		} catch (error) {
			return popAlert(error.message, 'danger');
		}
		popAlert('Signing up...', 'primary');
		setTimeout(() => {
			props.history.push('/')
		}, 500)
	};
	return (
		<div className='col-md-6 offset-md-3'>
			<div className='card shadow1 rounded rounded-3'>
				{alert && <div className={`alert alert-${alert?.type} m-2`}>{alert?.alert}</div>}
				<div className='card-body text-center'>
					<h5 className='card-title'>Sign Up</h5>
					<form onSubmit={onSubmit}>
						<div className='mb-3'>
							<label htmlFor='email' className='form-label'>
								Email
							</label>
							<input type='text' className='form-control' autoComplete='username' name='email' id='email' ref={email} placeholder='Email' required />
						</div>
						<div className='mb-3'>
							<label htmlFor='password' className='form-label'>
								Password
							</label>
							<input type='password' className='form-control' autoComplete='new-password' name='password' id='password' ref={password} placeholder='Password' required />
						</div>
						<div className='mb-3'>
							<label htmlFor='password' className='form-label'>
								Confirm Password
							</label>
							<input type='password' className='form-control' autoComplete='new-password' name='password2' id='password2' ref={passwordConfirm} placeholder='Confirm Password' required />
						</div>
						<button className='btn shadow1' type='submit'>
							Sign Up
						</button>
					</form>
				</div>
				<div className='text-center'>
					<p>
						Already have an account? <Link to='/login'>Sign in</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
