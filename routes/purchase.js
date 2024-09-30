var express = require('express');
const { getAllPurchases, addNewPurchase } = require('../controllers/purchaseController');
const authMiddleware = require('../middleware/authMiddleware');
var router = express.Router();

router.get('/', authMiddleware, getAllPurchases)
router.post('/', authMiddleware, addNewPurchase)

module.exports = router;