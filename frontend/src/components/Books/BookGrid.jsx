import React from 'react';
import BookItem from './BookItem';

export default function BookGrid({ items }) {
	return (
		<div className='grid grid-cols-3 gap-4'>
			{items.map(book => (
				<BookItem
					key={book._id}
					id={book._id}
					title={book.title}
					author={book.author}
					price={book.price}
				/>
			))}
		</div>
	);
}
