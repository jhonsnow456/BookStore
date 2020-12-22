/** imported our express library + core packages*/ 
const express = require('express');


/** Add controller function */
const adminController = require('../controllers/admin');


const router = express.Router();


/** Adding the product */
// /admin/add-product => GET request
router.get('/add-product', adminController.getAddProduct);
// /admin/products => GET request
router.get('/products', adminController.getProducts);

/** Display the product entry */
// /admin/add-product => POST request
router.post('/add-product', adminController.postAddProduct);

/** Added edit product route by id */
router.get('/edit-product/:productId', adminController.getEditProduct);
router.post('/edit-product', adminController.postEditProduct);

router.post('/delete-product', adminController.postDeleteProduct);

// export the packages 
module.exports = router
