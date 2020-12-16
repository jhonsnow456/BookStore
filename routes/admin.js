/** imported our express library + core packages*/ 
const express = require('express');
const path = require('path');


/** import defined files by me */
const rootDir = require('../util/path');


const router = express.Router();

// created the product-list
const products = [];

/** Adding the product */
// /admin/add-product => GET request
router.get('/add-product', (req, res, next)=>{
    // add the form over here 
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product');
});

/** Display the product entry */
// /admin/add-product => POST request
router.post('/add-product', (req, res, next) =>{
    products.push({title: req.body.title})
    res.redirect('/'); // to redirect to the root
});


// export the packages 
exports.routes = router;
exports.products = products;
