const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

/** Adding the product */
// /admin/add-product => GET request
router.get('/add-product', (req, res, next)=>{
    // add the form over here 
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

/** Display the product entry */
// /admin/add-product => POST request
router.post('/add-product', (req, res, next) =>{
    console.log(req.body);
    res.redirect('/'); // to redirect to the root
});

module.exports = router;
