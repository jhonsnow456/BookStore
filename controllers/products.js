const Product = require('../models/product');

exports.getAddProduct = (req, res, next)=>{
    // add the form over here 
    res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product' });
}

exports.postAddProduct = (req, res, next) =>{
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/'); // to redirect to the root
}

exports.getProducts = (req, res, next) => {
    // console.log('shop.js', adminData.products);
    const products = Product.fetchAll();
    res.render('shop', {prods: products, pageTitle: 'Shop', path: '/'});
}