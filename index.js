const fs = require('fs')



class usersManager{
    constructor(){
        this.user = "";
    }
 


}


// Product manager class

// class ProductManager {
//     constructor() {
//         this.products = [];
//     }

//     addProduct(title, description, price, thumbnail, id, stockQuantity) {
//         this.products.push({
//             title,
//             description,
//             price,
//             thumbnail,
//             id,
//             stockQuantity
//         });
//     }
//     addProduct(title, description, price, thumbnail, id, stockQuantity) {
//         const idExists = this.products.some(product => product.id === id);
//         if (idExists) {
//             throw new Error(`Product with id ${id} already exists.`);
//         }

//         this.products.push({
//             title,
//             description,
//             price,
//             thumbnail,
//             id,
//             stockQuantity
//         });
//     }

//     getProducts() {
//         console.log(this.products);
//     }

//     getProductByID(id) {
//         const product = this.products.find(product => product.id === id);
//         if (!product) {
//             throw new Error(`Product with id ${id} not found.`);
//         }
//         return product;
//     }
// }