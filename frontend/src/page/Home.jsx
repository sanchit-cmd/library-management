import React, { useEffect, useState } from 'react';
import axois from 'axios';
import Layout from '../components/Layout';
import Loading from '../components/Loading';
import BookGrid from '../components/Books/BookGrid';

export default function Home() {
	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function getData() {
			const fetchedBooks = await axois.get('http://localhost:3000/books');

			const allBooks = fetchedBooks.data.data;
			setBooks([...allBooks]);
		}

		getData();
		setLoading(false);
	}, []);

	return (
		<Layout>
			<div>
				{loading && <Loading />}
				{!loading && <BookGrid items={books} />}
			</div>
		</Layout>
	);
}
