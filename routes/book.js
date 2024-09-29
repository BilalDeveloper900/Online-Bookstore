var express = require('express');
const { getAllBooks, addNewBook, getSingleBook, updateSingleBook, deleteBook } = require('../controllers/bookController');
var router = express.Router();

router.get('/', getAllBooks)
router.post('/', addNewBook)
router.get('/:id', getSingleBook)
router.put('/:id', updateSingleBook)
router.delete('/:id', deleteBook)

module.exports = router;