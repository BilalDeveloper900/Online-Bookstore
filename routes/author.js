var express = require('express');
var router = express.Router();

router.get('/', () => {
    res.send("get author")
})

module.exports = router;