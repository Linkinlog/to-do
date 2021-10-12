import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
	return (
		<div className='col-md-6 offset-md-3'>
			<div className='card shadow1 rounded rounded-3'>
				<div className='card-body text-center'>
					<h5 className='card-title'>Sign Up</h5>
					<div className='mb-3'>
						<label for='username' className='form-label'>
							Username
						</label>
						<input type='text' className='form-control' name='username' id='username' placeholder='Username' />
					</div>
					<div className='mb-3'>
						<label for='password' className='form-label'>
							Password
						</label>
						<input type='password' className='form-control' name='password' id='password' placeholder='Password' />
					</div>
					<div className='mb-3'>
						<label for='password' className='form-label'>
							Confirm Password
						</label>
						<input type='password' className='form-control' name='password2' id='password2' placeholder='Confirm Password' />
					</div>
					<button className='btn shadow1' type='submit'>
						Sign Up
					</button>
				</div>
				<div className='text-center'>
					<p>Already have an account? <Link to='/login'>Sign in</Link></p>
				</div>
			</div>
		</div>
	);
};

export default SignUp;