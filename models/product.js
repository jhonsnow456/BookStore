const fs = require('fs')
const path = require('path')


// set a global helper function 
const p = path.join(
    path.dirname(require.main.filename), 
    'data', 
    'products.json'
);

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
    constructor(title){
        this.title = title;
    }

    save(){  
        getProductsFromFile(products =>{
            products.push(this);
            
            fs.writeFile(p, JSON.stringify(products), (err)=>{
                console.log(err);
            });
        });
    }

    static fetchAll(call_back){
        getProductsFromFile(call_back);
    }
}