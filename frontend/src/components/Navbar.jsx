import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<nav className='py-6 px-12 flex justify-between items-center mx-auto bg-white'>
			<Link to={'/'}>
				<h1 className='bg-blue-800 text-white font-bold px-4 py-2'>
					Library
				</h1>
			</Link>
			<ul className='flex items-center justify-between gap-6'>
				<li className=''>
					<Link to={'/'}>Home</Link>
				</li>
				<li>
					<Link
						className='bg-blue-800 rounded-lg text-white font-bold px-4 py-1 text-xl'
						to={'/create'}
					>
						+
					</Link>
				</li>
			</ul>
		</nav>
	);
}
