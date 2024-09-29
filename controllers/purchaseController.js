const { httpsCodes } = require("../constant/httpcode");
const Purchase = require("../models/purchaseModel");
const Book = require("../models/bookModel");
const User = require("../models/userModel"); 

exports.addNewPurchase = async (req, res) => {
    try {
        const { bookId } = req.body;
        const userId = req.user._id;  

        const book = await Book.findById(bookId);
        if (!book) {
            return res.status(httpsCodes.NOT_FOUND).json({ message: "Book not found" });
        }

        const newPurchase = new Purchase({
            book: book._id,
            user: userId,
            dateOfPurchase: Date.now()
        });

        await newPurchase.save();
        return res.status(httpsCodes.CREATED).json({ message: "Purchase successful", purchase: newPurchase });
    } catch (error) {
        return res.status(httpsCodes.SERVER_ERROR_CODE).json({ message: error.message });
    }
};

exports.getAllPurchases = async (req, res) => {
    try {
        const purchases = await Purchase.find().populate('book user');
        return res.status(httpsCodes.SUCCESS_CODE).json({ purchases });
    } catch (error) {
        return res.status(httpsCodes.SERVER_ERROR_CODE).json({ message: error.message });
    }
};
