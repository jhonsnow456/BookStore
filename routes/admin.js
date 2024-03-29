/** imported our express library + core packages*/
const express = require("express");

/** Add controller function */
const adminController = require("../controllers/admin");

const router = express.Router();

router.get("/add-product", adminController.getAddProduct);
router.get("/products", adminController.getProducts);
router.post("/add-product", adminController.postAddProduct);
router.get("/edit-product/:productId", adminController.getEditProduct);
router.post("/edit-product", adminController.postEditProduct);
router.post("/delete-product", adminController.postDeleteProduct);

// export the packages
module.exports = router;
