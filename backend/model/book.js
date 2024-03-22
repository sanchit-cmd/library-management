const mongoose = require('mongoose');

const newBook = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		author: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Book = mongoose.model('book', newBook);
module.exports = Book;
