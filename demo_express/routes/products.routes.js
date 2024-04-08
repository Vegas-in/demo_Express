const fetch = require('node-fetch');
const productsController = require('../controllers/products.controller');
const router = require('express').Router();

//  http://localhost:3000/api/products
//  http://localhost:3000/api/products/1
//  http://localhost:3000/api/products/2
router.get("/:id?", productsController.getProduct);
//Ejercicio : habilitar ruta post para
/*

*/
//POST http://localhost:3000/api/products
router.post("/", productsController.createProduct)

module.exports = router;