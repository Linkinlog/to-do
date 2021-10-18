import React from 'react';
import { Link } from 'react-router-dom';
import { useTodos } from '../../context/todoContext/todoContext';
import { useAuth } from '../../context/authContext/authContext';
import AddToDo from '../todo/AddToDo';

const Navb = () => {
	const { changeGroup } = useTodos();
	const { isAuthenticated, logOut, user } = useAuth();
	return (
		<>
			<button className='btn m-2' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasExample' aria-controls='offcanvasExample'>
				<svg width='24px' height='24px' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'>
					<path d='M41,14H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,14Z' fill='#6f7380' />
					<path d='M41,26H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,26Z' fill='#6f7380' />
					<path d='M41,38H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,38Z' fill='#6f7380' />
				</svg>
			</button>
			<div className='offcanvas offcanvas-start' tabIndex='-1' id='offcanvasExample' aria-labelledby='offcanvasExampleLabel'>
				<div className='offcanvas-header'>
					<h5 className='offcanvas-title' id='offcanvasExampleLabel'>
						To-Do Menu
					</h5>
					<button type='button' className='btn-close text-reset' data-bs-dismiss='offcanvas' aria-label='Close'></button>
				</div>
				<div>
					<Link to='/'>
						<button className='btn ms-3 shadow1' data-bs-dismiss='offcanvas'>
							🏠
						</button>
					</Link>
					{isAuthenticated ? (
						<button className='btn ms-3 shadow1' data-bs-dismiss='offcanvas' onClick={logOut}>
							🔚 Logout
						</button>
					) : (
						<Link to='/login'>
							<button className='btn ms-3 shadow1' data-bs-dismiss='offcanvas'>
								🚀 Login / Signup
							</button>
						</Link>
					)}
				</div>
				<div className='offcanvas-body'>
					<div className='dropdown mb-3'>
						<button className='btn shadow1 dropdown-toggle' type='button' id='dropdownMenuButton' data-bs-toggle='dropdown'>
							Task Group
						</button>
						<ul className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
							<li>
								<button className='btn dropdown-item' onClick={() => changeGroup('personal')} data-bs-dismiss='offcanvas'>
									Personal
								</button>
							</li>
							<li>
								<button className='btn dropdown-item' onClick={() => changeGroup('professional')} data-bs-dismiss='offcanvas'>
									Professional
								</button>
							</li>
							<li>
								<button className='btn dropdown-item' onClick={() => changeGroup()} data-bs-dismiss='offcanvas'>
									Clear
								</button>
							</li>
						</ul>
					</div>
					{isAuthenticated && (
						<div>
							<AddToDo />
							<p className='d-flex justify-content-end text-muted mt-3 pe-3'>Logged in as { user.email }</p>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Navb;
