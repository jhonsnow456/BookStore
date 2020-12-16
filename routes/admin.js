const express = require('express')

const router = express.Router();

/** Adding the product */
router.get('/add-product', (req, res, next)=>{
    // add the form over here 
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

/** Display the product entry */
router.post('/product', (req, res, next) =>{
    console.log(req.body);
    res.redirect('/'); // to redirect to the root
});

module.exports = router;
