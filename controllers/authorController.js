const Author = require('../models/authorModel'); 
const { httpsCodes } = require("../constant/httpcode");

exports.addNewAuthor = async (req, res) => {
    try {
        const { name, biography, dateOfBirth } = req.body;
        const newAuthor = new Author({ name, biography, dateOfBirth });
        await newAuthor.save();
        res.status(httpsCodes.CREATED).json({ message: "Author added successfully", author: newAuthor });
    } catch (error) {
        res.status(httpsCodes.BAD_REQUEST).json({ message: error.message });
    }
}

exports.getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.find();
        res.status(httpsCodes.CREATED).json(authors);
    } catch (error) {
        res.status(httpsCodes.BAD_REQUEST).json({ message: error.message });
    }
}

exports.getSingleAuthor = async (req, res) => {
    try {
        const { id } = req.params;
        const author = await Author.findById(id);
        if (!author) return res.status(httpsCodes.NOT_FOUND).json({ message: 'Author not found' });
        res.status(httpsCodes.CREATED).json(author);
    } catch (error) {
        res.status(httpsCodes.BAD_REQUEST).json({ message: error.message });
    }
}

exports.updateSingleAuthor = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, biography, dateOfBirth } = req.body;
        const updatedAuthor = await Author.findByIdAndUpdate(id, { name, biography, dateOfBirth }, { new: true });
        if (!updatedAuthor) return res.status(httpsCodes.NOT_FOUND).json({ message: 'Author not found' });
        res.status(httpsCodes.CREATED).json({ message: "Author updated successfully", author: updatedAuthor });
    } catch (error) {
        res.status(httpsCodes.BAD_REQUEST).json({ message: error.message });
    }
}

exports.deleteAuthor = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedAuthor = await Author.findByIdAndDelete(id);
        if (!deletedAuthor) return res.status(httpsCodes.NOT_FOUND).json({ message: 'Author not found' });
        res.status(httpsCodes.CREATED).json({ message: 'Author deleted successfully' });
    } catch (error) {
        res.status(httpsCodes.BAD_REQUEST).json({ message: error.message });
    }
}
