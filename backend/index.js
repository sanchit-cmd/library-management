const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const Book = require('./model/book');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://0.0.0.0:27017/library').then(() => {
	console.log('MongoDB Connected');
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	return res.json({ message: 'Hello' });
});

app.route('/books')
	.post(async (req, res) => {
		try {
			const body = req.body;
			if (!body.title || !body.author || !body.price) {
				return res.status(201).send('Send all required files');
			}

			const newBook = {
				title: body.title,
				author: body.author,
				price: body.price,
			};

			const book = await Book.create(newBook);

			return res.status(200).json(book);
		} catch (err) {
			console.log(err.message);
		}
	})
	.get(async (req, res) => {
		try {
			const allBooks = await Book.find({});
			console.log(allBooks);

			const data = {
				count: allBooks.length,
				data: allBooks,
			};

			return res.json(data);
		} catch (error) {
			console.log(error.messae);
		}
	});

app.route('/books/:id')
	.get(async (req, res) => {
		try {
			const { id } = req.params;

			const book = await Book.findById(id);

			if (book === null)
				return res
					.status(201)
					.json({ message: `No book found with id: ${id}` });

			return res.json(book);
		} catch (error) {
			console.log(error.message);
		}
	})
	.put(async (req, res) => {
		try {
			const { id } = req.params;

			const body = req.body;
			if (!body.title || !body.author || !body.price) {
				return res.status(201).send('Send all required files');
			}

			const newBook = {
				$set: {
					title: body.title,
					author: body.author,
					price: body.price,
				},
			};

			const book = await Book.updateOne({ _id: id }, newBook);
			return res.json(book);
		} catch (error) {
			console.log(error.message);
		}
	})
	.delete(async (req, res) => {
		const { id } = req.params;
		const deletedBook = await Book.findByIdAndDelete(id);
		return res.status(200).json(deletedBook);
	});

app.listen(PORT, () => {
	console.log('Server running on port ' + PORT);
});
