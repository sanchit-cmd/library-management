import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Layout from '../components/Layout';
import Loading from '../components/Loading';

export default function EditPost() {
	let { id } = useParams();
	const navigate = useNavigate();

	const [loading, setLoading] = useState(true);
	const [book, setBook] = useState({
		title: '',
		author: '',
		price: '',
	});

	useEffect(() => {
		async function getData() {
			const fetchedBook = await axios.get(
				`http://localhost:3000/books/${id}`
			);
			setLoading(false);
			setBook(fetchedBook.data);
		}
		getData();
	}, []);

	async function onSubmitHandler(event) {
		event.preventDefault();

		try {
			if (
				!book ||
				book.title === '' ||
				!book.title ||
				book.author === '' ||
				!book.author ||
				book.price === '' ||
				!book.price
			) {
				alert('Enter all the required fields');
				setTimeout(() => {
					navigate('/');
				}, 500);
			}

			const newBook = {
				title: book.title,
				author: book.author,
				price: Number(book.price),
			};

			const response = await axios.put(
				`http://localhost:3000/books/${id}`,
				newBook
			);

			navigate('/');
		} catch (error) {
			console.log(error.message);
		}
	}

	return (
		<Layout>
			<div className='flex justify-center items-center'>
				{loading && <Loading />}
				{!loading && (
					<form
						onSubmit={onSubmitHandler}
						className='bg-white rounded-xl px-6 py-8 w-96 flex flex-col justify-between gap-4 shadow-2xl'
					>
						<div className='flex flex-col gap-2 justify-between'>
							<label className='font-semibold' htmlFor='title'>
								Title
							</label>
							<input
								className='outline outline-black outline-1 rounded px-2 py-1'
								type='text'
								id='title'
								name='title'
								placeholder='One Piece'
								value={book.title}
								onChange={event => {
									setBook({
										...book,
										title: event.target.value,
									});
								}}
								required
							/>
						</div>

						<div className='flex flex-col gap-2 justify-between'>
							<label className='font-semibold ' htmlFor='author'>
								Author
							</label>
							<input
								className='outline outline-black outline-1 rounded px-2 py-1'
								type='text'
								id='author'
								name='author'
								placeholder='Eiichiro Oda'
								value={book.author}
								onChange={event => {
									setBook({
										...book,
										author: event.target.value,
									});
								}}
								required
							/>
						</div>

						<div className='flex flex-col gap-2 justify-between'>
							<label className='font-semibold' htmlFor='price'>
								Price
							</label>
							<input
								className='outline outline-black outline-1 rounded px-2 py-1'
								type='number'
								id='price'
								name='price'
								placeholder='₹500'
								required
								value={book.price}
								onChange={event => {
									setBook({
										...book,
										price: event.target.value,
									});
								}}
							/>
						</div>
						<div>
							<button className='w-full text-white bg-blue-600 py-3 text-center rounded-lg'>
								Submit
							</button>
						</div>
					</form>
				)}
			</div>
		</Layout>
	);
}
