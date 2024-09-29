const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true },
    ISBN: { type: String, required: true },
    price: { type: Number, required: true },
    publishedDate: { type: Date, required: true }
}, { timestamps: true });

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
