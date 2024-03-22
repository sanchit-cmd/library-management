import React from 'react';
import Navbar from './Navbar';

export default function Layout(props) {
	return (
		<>
			<Navbar />
			<main className='bg-gray-100 h-screen'>
				<div className='w-4/5 mx-auto py-8'>{props.children}</div>
			</main>
		</>
	);
}
