import express from "express";
import productsRouter  from"./src/routes/products.router.js";
// import cartsRouter from "./src/routes/cart.router.js";

// debe tener estas 2 rutas desde /api => /products y /carts.

const app = express();
const PORT = 8080;
app.use(express.json());

app.use('/api/products', productsRouter); //ruta /api/products
// app.use('/api/carts', cartsRouter); //ruta /api/carts

//rutas para manejos de carritos  | POST
// Debe crear un nuevo carrito con la siguiente estructura:
// id: Number/String (Autogenerado para asegurar que nunca se dupliquen los ids).
// products: Array que contendrá objetos que representen cada producto.

// GET /:cid:
// Debe listar los productos que pertenecen al carrito con el cid proporcionado.

// POST /:cid/product/:pid:
// Debe agregar el producto al arreglo products del carrito seleccionado, utilizando el siguiente formato:
// product: Solo debe contener el ID del producto.

// quantity: Debe contener el número de ejemplares de dicho producto (se agregará de uno en uno).

// Si un producto ya existente intenta agregarse, se debe incrementar el campo quantity de dicho producto.

// Persistencia de la Información
// La persistencia se implementará utilizando el sistema de archivos, donde los archivos products.json y carts.json respaldarán la información.

// Se debe utilizar el ProductManager desarrollado en el desafío anterior y crear un CartManager para gestionar el almacenamiento de estos archivos JSON.

//Servidor levantado en el puerto 8080
app.listen(PORT, () => {
  console.log("Server working on port | 8080 ");
});

//practica en clase
// import express from "express";

// const app = express();

// const users = [
//   { id: 1, nombre: "gero" },
//   { id: 2, nombre: "juliet" },
//   { id: 3, nombre: "mia" },
//   { id: 4, nombre: "anto" },
// ];

// //Conseguir usuarios por query params
// //este app.get consigue todos los usuarios, si se pasa un dato por query params, se filtra por ese dato
// app.get("/", (req, res) => {
//     const { nombre } = req.query;
//     if (nombre){
//         const userFound = users.find((e) => e.nombre === nombre);
//         if (userFound)return res.json(userFound)
//     }
//   res.send(res.json(users));
// });

// //conseguir usuarios por id
// app.get("/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const foundUser = users.find((user) => user.id === id);
//   if (!foundUser) return res.status(404).send("Usuario no encontrado");
//   res.json(foundUser);
// });

// app.post("/", (req, res) => {
//   res.send("POST Exitoso");
// });

// app.put("/", (req, res) => {
//   res.send("PUT Exitoso");
// });

// app.delete("/", (req, res) => {
//   res.send("DELETE Exitoso");
// });

// app.listen(8080, () => {
//   console.log("Servidor corriendo en el puerto 8080 !");
// });
//Fin de la practica en clase

// //Hello World desde express
// import express from 'express';
// const PORT = 9100;

// const app = express();

// app.get('/saludo' , (req,res) =>{
//     res.send("Hello World from expresss!")
// })

// app.listen( PORT , () => {
//     console.log(`Servidor Online! | ${PORT} `)
// })

// //express api para postman

// const express = require('express')
// const app = express()
// const PORT = 3000

// //middleware para trabajar con datos JSON
// app.use(express.json())

// let usuarios = []

// //metodo get
//  app.get('/usuarios', (req,res) => {
//      res.json(usuarios)
//  })

// //metodo post
// app.post('/usuarios', (req,res) => {
//     const { nombre , edad } = req.body
//     const nuevoUsuarios = {id: usuarios.length + 1 , nombre , edad}
//     usuarios.push(nuevoUsuarios)
//     res.status(201).json(nuevoUsuarios)

// })

// //metodo put
// app.put('/usuarios/:id', (req,res) => {
//     const { id } = req.params
//     const { nombre , edad } = req.body
//     const usuario = usuarios.find(usuario => usuario.id === parseInt(id))
//     if(!usuario) return res.status(404).json({msg: "Usuario no encontrado"})

//         //actualizar el usuario
//     usuario.nombre = nombre || usuario.nombre
//     usuario.edad = edad || usuario.edad
//     res.json(usuario)

// })

// //metodo delete
// app.delete('/usuarios/:id', (req,res) => {
//     const { id } = req.params
//     usuarios = usuarios.filter(usuario => usuario.id !== parseInt(id))
//     res.json({msg: "Usuario eliminado"})
// })

// app.listen(PORT , () =>{
//     console.log(`servidor levantado en el puerto ${PORT}`)
// });

// //expres http

// const express = require('express')
// const app = express()
// const PORT = 4444

// //metodo get
// app.get('/', (req,res) => {
//     res.json({
//         msg: "GET"
//     })
// })

// //metodo post
// app.post('/', (req,res) => {
//     res.json({
//         msg: "POST"
//     })
// })

// //metodo put
// app.put('/', (req,res) => {
//     res.json({
//         msg: "put"
//     })
// })

// app.delete('/', (req,res) => {
//     res.json({
//         msg: "delete"
//     })
// })

// app.listen(PORT, () => {
//     console.log(`Servidor corriendo en el puerto ${PORT}`);

// })

//Creando un Servidor en LocalHost (Modulo nativo de Node)
// const http = require('http')

// const server = http.createServer((request, response) => {
//     response.end( "Hello Gero" )
// })

// server.listen(8000, () => {
//     console.log("Server activo!")
// })

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
