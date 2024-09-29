var express = require('express');
const { getAllPurchases, addNewPurchase } = require('../controllers/purchaseController');
var router = express.Router();

router.get('/', getAllPurchases)
router.post('/', addNewPurchase)

module.exports = router;