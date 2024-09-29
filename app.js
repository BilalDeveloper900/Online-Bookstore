var express = require('express');
var cookieParser = require('cookie-parser');
require('dotenv').config();

var usersRouter = require('./routes/users');
var booksRouter = require('./routes/book');
var purchaseRouter = require('./routes/purchase');
var authorRouter = require('./routes/author');
const connectDB = require("./config/db")

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

connectDB();

app.use('/api/v1/user', usersRouter);
app.use('/api/v1/book', booksRouter);
app.use('/api/v1/purchase', purchaseRouter);
app.use('/api/v1/author', authorRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

module.exports = app;
