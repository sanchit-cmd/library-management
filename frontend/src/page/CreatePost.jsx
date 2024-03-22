import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Form from '../components/Form';
import axios from 'axios';

export default function CreatePost() {
	const navigate = useNavigate();

	async function onSubmitHandler(event) {
		event.preventDefault();

		try {
			if (
				!event.target.title.value ||
				!event.target.author.value ||
				!event.target.price.value
			) {
				window.alert('Please enter all the required fields...');
				return;
			}

			const newBook = {
				title: event.target.title.value,
				author: event.target.author.value,
				price: Number(event.target.price.value),
			};

			const response = await axios.post(
				'http://localhost:3000/books',
				newBook,
				{
					'Content-Type': 'application/json',
				}
			);

			navigate('/');
		} catch (error) {
			console.log(error.message);
		}
	}

	return (
		<Layout>
			<div className='flex items-center justify-center'>
				<Form onSubmitHandler={onSubmitHandler} />
			</div>
		</Layout>
	);
}
