const Product = require('../models/product');


exports.getAddProduct = (req, res, next)=>{
    // add the form over here 
    res.render('admin/add-product', { pageTitle: 'admin add-product', path: '/admin/add-product' });
}

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;

    const product = new Product(title, imageUrl, price, description);
    
    product.save();
    res.redirect('/'); // to redirect to the root
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('admin/products', {prods: products, pageTitle: 'admin products', path: '/admin/products' });
    });
}
