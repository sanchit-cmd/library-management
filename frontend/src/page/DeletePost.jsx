import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import axios from 'axios';
import Loading from '../components/Loading';

export default function DeletePost() {
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		async function getData() {
			try {
				const response = await axios.get(
					`http://localhost:3000/books/${id}`,
					{ timeout: 1500 }
				);
				setLoading(false);
			} catch (error) {
				alert('Book ID not found');
				setTimeout(() => {
					navigate('/');
				}, 500);
			}
		}
		getData();
	}, []);

	async function deleteHandler() {
		try {
			const response = await axios.delete(
				`http://localhost:3000/books/${id}`
			);
			navigate('/');
		} catch (error) {
			console.log(error.message);
		}
	}

	return (
		<Layout>
			{loading && <Loading />}
			{!loading && (
				<div className='flex flex-col items-center justify-between gap-4 text-center'>
					<h1 className='w-full text-white py-4 font-bold bg-blue-600 rounded'>
						Do you want to delete this Book?
					</h1>
					<div className='flex items-center justify-between gap-6'>
						<button
							className='bg-green-600 py-2 text-white font-semibold px-4'
							onClick={deleteHandler}
						>
							Yes
						</button>
						<button
							className='bg-red-600 py-2 text-white font-semibold px-4'
							onClick={() => {
								navigate('/');
							}}
						>
							No
						</button>
					</div>
				</div>
			)}
		</Layout>
	);
}
