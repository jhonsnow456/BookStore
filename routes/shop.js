/** imported our express library + core packages*/
const express = require("express");

/** Add controller function */
const shopController = require("../controllers/shop");

const router = express.Router();

/** Our home page */
router.get("/", shopController.getIndex);
router.get("/products", shopController.getProducts);
router.get("/products/:productId", shopController.getProduct);
router.get("/cart", shopController.getCart);
router.post("/cart", shopController.postCart);
router.post("/cart-delete-item", shopController.postCartDeleteProduct);
router.post("/create-order", shopController.postOrder);
router.get("/orders", shopController.getOrders);

// export the package
module.exports = router;
