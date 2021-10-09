import React from 'react';
import { Link } from 'react-router-dom';
import AddToDo from '../todo/AddToDo';

const Navb = () => {
	return (
		<>
			<button className='btn m-2' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasExample' aria-controls='offcanvasExample'>
				<svg width='24px' height='24px' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'>
					<title>70 Basic icons by Xicons.co</title>
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
					<Link to='/login'>
						<button className='btn ms-3 shadow1'>🚀 Login / Signup</button>
					</Link>
					{/* todo if auth? */}
					<button className='btn ms-3 shadow1'>🔚 Logout</button>
				</div>
				<div className='offcanvas-body'>
					<div className='dropdown mb-3'>
						<button className='btn shadow1 dropdown-toggle' type='button' id='dropdownMenuButton' data-bs-toggle='dropdown'>
							Task Group
						</button>
						<ul className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
							<li>
								<a className='dropdown-item' href=' '>
									Personal
								</a>
							</li>
						</ul>
					</div>
					{/* todo if auth? */}
					<AddToDo />
				</div>
			</div>
		</>
	);
};

export default Navb;
