import React from 'react';
import { Link } from 'react-router-dom';

export default function BookItem({ id, title, author, price }) {
	return (
		<div className='bg-white shadow-2xl rounded-xl px-8 py-3 flex flex-col items-start justify-between gap-4'>
			<h3 className=''>
				<span className='block text-2xl mb-1 font-semibold capitalize'>
					{title}
				</span>
				<span className='block text-xs text-gray-600 capitalize'>
					{author}
				</span>
			</h3>
			<p>Price: ₹{price}</p>

			<div className='w-full flex items-start justify-evenly'>
				<Link className='text-red-600' to={`/delete/${id}`}>
					Delete
				</Link>
				<Link className='text-green-600' to={`/edit/${id}`}>
					Edit
				</Link>
			</div>
		</div>
	);
}
