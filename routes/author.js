var express = require('express');
const { getAllAuthors, addNewAuthor, getSingleAuthor, updateSingleAuthor, deleteAuthor } = require('../controllers/authorController');
var router = express.Router();

router.get('/', getAllAuthors)
router.post('/', addNewAuthor)
router.get('/:id', getSingleAuthor)
router.put('/:id', updateSingleAuthor)
router.delete('/:id', deleteAuthor)

module.exports = router;