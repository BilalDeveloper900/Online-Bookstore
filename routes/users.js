var express = require('express');
const { createUser, loginUser } = require('../controllers/userController');
var router = express.Router();

/* GET users listing. */
router.post('/login', loginUser);
router.post('/signUp', createUser);



module.exports = router;
