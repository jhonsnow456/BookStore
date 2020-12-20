/** imported our express library + core packages*/ 
const express = require('express');


/** Add controller function */
const shopController = require('../controllers/shop');


const router = express.Router();


/** Our home page */
router.get('/', shopController.getIndex);
router.get('/products', shopController.getProducts);
router.get('/cart', shopController.getCart);
router.get('/orders', shopController.getOrders);
router.get('/checkout', shopController.getCheckout);

// export the package
module.exports = router;