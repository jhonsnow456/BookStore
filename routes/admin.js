const express = require('express')

const router = express.Router();

/** Adding the product */
// /admin/add-product => GET request
router.get('/add-product', (req, res, next)=>{
    // add the form over here 
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

/** Display the product entry */
// /admin/add-product => POST request
router.post('/add-product', (req, res, next) =>{
    console.log(req.body);
    res.redirect('/'); // to redirect to the root
});

module.exports = router;
