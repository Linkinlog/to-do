import React from 'react';

const Navb = () => {
	return (
		<>
			<button class='btn btn-primary m-2' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasExample' aria-controls='offcanvasExample'>
			<svg width="24px" height="24px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><title>70 Basic icons by Xicons.co</title><path d="M41,14H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,14Z" fill="#6f7380"/><path d="M41,26H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,26Z" fill="#6f7380"/><path d="M41,38H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,38Z" fill="#6f7380"/></svg>
			</button>
			<div class='offcanvas offcanvas-start' tabindex='-1' id='offcanvasExample' aria-labelledby='offcanvasExampleLabel'>
				<div class='offcanvas-header'>
					<h5 class='offcanvas-title' id='offcanvasExampleLabel'>
						Offcanvas
					</h5>
					<button type='button' class='btn-close text-reset' data-bs-dismiss='offcanvas' aria-label='Close'></button>
				</div>
				<div class='offcanvas-body'>
					<div>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</div>
					<div class='dropdown mt-3'>
						<button class='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton' data-bs-toggle='dropdown'>
							Dropdown button
						</button>
						<ul class='dropdown-menu' aria-labelledby='dropdownMenuButton'>
							<li>
								<a class='dropdown-item' href=' '>
									Action
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navb;
