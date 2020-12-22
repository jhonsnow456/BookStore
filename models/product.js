const fs = require('fs')
const path = require('path')

const Cart = require('./cart')

// set a global helper function 
const p = path.join(path.dirname(require.main.filename), 'data', 'products.json');

const getProductsFromFile = call_back =>{
    fs.readFile(p, (err, fileContent)=>{
        if (err){
            return call_back([]);
        }
        return call_back(JSON.parse(fileContent));
    });
}

// created a class named Product and defined it's properties
module.exports = class Product{
    constructor(id, title, imageUrl, description, price) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    }

    save(){  
        getProductsFromFile(products =>{
            if (this.id){
                const existingProductIndex = products.findIndex(prod => prod.id === this.id);
                const updatedProducts = [...products];
                updatedProducts[existingProductIndex] = this;

                fs.writeFile(p, JSON.stringify(updatedProducts), (err)=>{
                    console.log(err);
                });
            }
            else{
                this.id = Math.random().toString();
                products.push(this);
            
                fs.writeFile(p, JSON.stringify(products), (err)=>{
                    console.log(err);
                });
            }
        });
    }

    /** delete product by id */
    static deleteById(id) {
        getProductsFromFile(products => {
            const product = products.find(prod => prod.id === id);
            const updatedProducts = products.filter(prod => prod.id !== id);
          
            fs.writeFile(p, JSON.stringify(updatedProducts), err => {
                if (!err) {
                    Cart.deleteProduct(id, product.price);
                }
            });
        });
    }

    static fetchAll(call_back){
        getProductsFromFile(call_back);
    }

    static findById(id, call_back){
        getProductsFromFile(products => {
           const product = products.find(p => p.id === id);
           call_back(product); 
        });
    }
}