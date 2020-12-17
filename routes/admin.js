/** imported our express library + core packages*/ 
const express = require('express');


/** Add controller function */
const productController = require('../controllers/products');


const router = express.Router();


/** Adding the product */
// /admin/add-product => GET request
router.get('/add-product', productController.getAddProduct);

/** Display the product entry */
// /admin/add-product => POST request
router.post('/add-product', productController.postAddProduct);


// export the packages 
module.exports = router
