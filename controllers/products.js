// created the product-list
const products = [];


exports.getAddProduct = (req, res, next)=>{
    // add the form over here 
    res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product' });
}

exports.postAddProduct = (req, res, next) =>{
    products.push({title: req.body.title})
    res.redirect('/'); // to redirect to the root
}

exports.getProducts = (req, res, next) => {
    // console.log('shop.js', adminData.products);
    res.render('shop', {prods: products, pageTitle: 'Shop', path: '/'});
}