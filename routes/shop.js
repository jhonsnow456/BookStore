const express = require('express');

const router = express.Router();

/** Our home page */
router.get('/', (req, res, next) => {
    res.send('<h1>Welcome to use Express </h1>')
});

module.exports = router;
