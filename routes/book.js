var express = require('express');
const { getAllBooks, addNewBook, getSingleBook, updateSingleBook, deleteBook } = require('../controllers/bookController');
const authMiddleware = require('../middleware/authMiddleware');
var router = express.Router();

router.get('/',authMiddleware, getAllBooks)
router.post('/',authMiddleware, addNewBook)
router.get('/:id',authMiddleware, getSingleBook)
router.put('/:id',authMiddleware, updateSingleBook)
router.delete('/:id',authMiddleware, deleteBook)

module.exports = router;