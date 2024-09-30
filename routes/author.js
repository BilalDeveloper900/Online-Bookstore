var express = require('express');
const { getAllAuthors, addNewAuthor, getSingleAuthor, updateSingleAuthor, deleteAuthor } = require('../controllers/authorController');
const authMiddleware = require('../middleware/authMiddleware');
var router = express.Router();

router.get('/',authMiddleware, getAllAuthors)
router.post('/', authMiddleware,addNewAuthor)
router.get('/:id',authMiddleware, getSingleAuthor)
router.put('/:id', authMiddleware,updateSingleAuthor)
router.delete('/:id',authMiddleware, deleteAuthor)

module.exports = router;