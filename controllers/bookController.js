const { httpsCodes } = require("../constant/httpcode");


exports.addNewBook = async (req, res) => {
    try {

    } catch (error) {
        res.status(httpsCodes.BAD_REQUEST).json({ message: error.message });
    }
}

exports.getAllBooks = async (req, res) => {
    try {

    } catch (error) {
        res.status(httpsCodes.BAD_REQUEST).json({ message: error.message });
    }
}

exports.getSingleBook = async (req, res) => {
    try {

    } catch (error) {
        res.status(httpsCodes.BAD_REQUEST).json({ message: error.message });
    }
}

exports.updateSingleBook = async (req, res) => {
    try {

    } catch (error) {
        res.status(httpsCodes.BAD_REQUEST).json({ message: error.message });
    }
}

exports.deleteBook = async (req, res) => {
    try {

    } catch (error) {
        res.status(httpsCodes.BAD_REQUEST).json({ message: error.message });
    }
}