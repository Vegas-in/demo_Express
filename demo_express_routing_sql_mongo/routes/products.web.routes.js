const productsWebController = require('../controllers/products.web.controller');
const router = require('express').Router();

// http://localhost:3000/products
// http://localhost:3000/products/1
// http://localhost:3000/products/5
router.get("/:id?", productsWebController.getProduct);


module.exports = router;