/** imported our express library + core packages*/ 
const express = require('express');
const path = require('path');


/** import defined files by me */
const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();


/** Our home page */
router.get('/', (req, res, next) => {
    console.log('shop.js', adminData.products);
    res.render('shop');
});


// export the package
module.exports = router;