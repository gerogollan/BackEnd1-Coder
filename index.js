import express from "express";
import productsRouter  from"./src/routes/products.router.js";
import cartsRouter from "./src/routes/cart.router.js";



const app = express();
const PORT = 8080;
app.use(express.json());

app.use('/api/products', productsRouter); //ruta /api/products
app.use('/api/carts', cartsRouter); //ruta /api/carts


app.get("/" , (req,res) =>{
    res.send("Welcome profe, please use /api/products to see our products")
})

//Servidor levantado en el puerto 8080
app.listen(PORT, () => {
  console.log("Server working on port | http://localhost:8080 ");
});


//Comandos postman

//PRODUCTOS

//GET productos
//GET  localhost:8080/api/products
//Obtengo la lista de productos ✔

//Get x ID
//GET localhost:8080/api/products/id
//Obtengo 1 producto ✔

//Post nuevo producto
//Post localhost:8080/api/products
//Tengo que mandar en el body con estos parametros: title, description,code,price,status,stock,category,thumbnails.✔
//el id se completa solo y si en el body viene incluido se omite ✔

//Put editar producto
//post localhost:8080/api/products/id
//en formato JSON pongo en el body que quiero cambiar
//{"price":20000} ✔

//delete elimar producto X ID
//delete localhost:8080/api/products/1
//se elimina del archivo products.json  ✔



//CARRITOS

//Lo primero es crear un carrito con post
//post localhost:8080/api/carts ✔

//post Agregar productos al carrito
//post localhost:8080/api/carts/7/product/4  ✔

//si agrego el mismo producto se suma. ✔

//get carrito x id
//get localhost:8080/api/carts/5 ✔

