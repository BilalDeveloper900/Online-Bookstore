var express = require('express');
var router = express.Router();

router.get('/', () => {
    res.send("get books")
})

module.exports = router;