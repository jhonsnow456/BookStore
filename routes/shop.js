/** imported our express library + core packages*/ 
const express = require('express');


/** Add controller function */
const shopController = require('../controllers/shop');


const router = express.Router();


/** Our home page */
router.get('/', shopController.getIndex);
router.get('/products', shopController.getProducts);
router.get('/products/:productId', shopController.getProduct);
router.get('/cart', shopController.getCart);
router.post('/cart', shopController.postCart);
router.post('/cart-delete-item', shopController.postCartDeleteProduct);
router.get('/orders', shopController.getOrders);
router.get('/checkout', shopController.getCheckout);

// export the package
module.exports = router;