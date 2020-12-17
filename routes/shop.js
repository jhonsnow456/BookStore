/** imported our express library + core packages*/ 
const express = require('express');
const path = require('path');


/** import defined files by me */
const adminData = require('./admin');

const router = express.Router();


/** Our home page */
router.get('/', (req, res, next) => {
    // console.log('shop.js', adminData.products);
    const products = adminData.products;
    res.render('shop', {prods: products, pageTitle: 'Shop', path: '/'});
});


// export the package
module.exports = router;