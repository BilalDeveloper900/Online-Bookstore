const Book = require('../models/bookModel'); 
const { httpsCodes } = require("../constant/httpcode");

exports.addNewBook = async (req, res) => {
    try {
        const { title, author, ISBN, price, publishedDate } = req.body;
        const newBook = new Book({ title, author, ISBN, price, publishedDate });
        await newBook.save();
        res.status(httpsCodes.CREATED).json({ message: "Book added successfully", book: newBook });
    } catch (error) {
        res.status(httpsCodes.BAD_REQUEST).json({ message: error.message });
    }
}

exports.getAllBooks = async (req, res) => {
    try {
        let { page = 1, limit = 10, sortBy = 'title', order = 'asc', author, publishedDate } = req.query;
        page = parseInt(page);
        limit = parseInt(limit);

        const filters = {};
        if (author) filters.author = author;
        if (publishedDate) filters.publishedDate = { $gte: new Date(publishedDate) };

        const books = await Book.find(filters)
            .sort({ [sortBy]: order === 'desc' ? -1 : 1 })
            .skip((page - 1) * limit)
            .limit(limit);

        const totalBooks = await Book.countDocuments(filters);

        res.status(httpsCodes.SUCCESS_CODE).json({
            totalPages: Math.ceil(totalBooks / limit),
            currentPage: page,
            totalBooks,
            books
        });
    } catch (error) {
        res.status(httpsCodes.BAD_REQUEST).json({ message: error.message });
    }
}

exports.getSingleBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id).populate('author');
        if (!book) return res.status(httpsCodes.NOT_FOUND).json({ message: 'Book not found' });
        res.status(httpsCodes.SUCCESS_CODE).json(book);
    } catch (error) {
        res.status(httpsCodes.BAD_REQUEST).json({ message: error.message });
    }
}

exports.updateSingleBook = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, author, ISBN, price, publishedDate } = req.body;
        const updatedBook = await Book.findByIdAndUpdate(id, { title, author, ISBN, price, publishedDate }, { new: true });
        if (!updatedBook) return res.status(httpsCodes.NOT_FOUND).json({ message: 'Book not found' });
        res.status(httpsCodes.SUCCESS_CODE).json({ message: "Book updated successfully", book: updatedBook });
    } catch (error) {
        res.status(httpsCodes.BAD_REQUEST).json({ message: error.message });
    }
}

exports.deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBook = await Book.findByIdAndDelete(id);
        if (!deletedBook) return res.status(httpsCodes.NOT_FOUND).json({ message: 'Book not found' });
        res.status(httpsCodes.SUCCESS_CODE).json({ message: 'Book deleted successfully' });
    } catch (error) {
        res.status(httpsCodes.BAD_REQUEST).json({ message: error.message });
    }
}
