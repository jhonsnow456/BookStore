const products =[]


module.exports = class Product{
    Product(title){
        this.title = title;
    }

    save(){
        products.push(this);
    }

    static fetchAll(){
        return products;
    }
}