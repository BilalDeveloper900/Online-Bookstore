const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    biography: { type: String, required: true },
    dateOfBirth: { type: Date, required: true }
});

const Author = mongoose.model('Author', authorSchema)

module.exports = Author;
