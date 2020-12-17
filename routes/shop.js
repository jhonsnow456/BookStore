/** imported our express library + core packages*/ 
const express = require('express');


/** Add controller function */
const productController = require('../controllers/products');


const router = express.Router();


/** Our home page */
router.get('/', productController.getProducts);


// export the package
module.exports = router;