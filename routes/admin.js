/**
 * DESCRIPTION:
 * 
 * This is our admin-data folder which is 
 * responsible for dealing with :
 * 1. routing 
 * 2. providing the data of which are updated to the product-list
 */

/** imported our express library + core packages*/ 
const express = require('express');
const path = require('path');


/** import defined files by me */
const rootDir = require('../util/path');


const router = express.Router();

// creating the product list
const product = []

/** Adding the product */
// /admin/add-product => GET request
router.get('/add-product', (req, res, next)=>{
    // add the form over here 
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

/** Display the product entry */
// /admin/add-product => POST request
router.post('/add-product', (req, res, next) =>{
    product.push({title: req.body.title });
    res.redirect('/'); // to redirect to the root
});

// export the packages 
exports.routes = router
exports.products = product
