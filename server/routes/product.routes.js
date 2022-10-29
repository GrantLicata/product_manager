const ProductController = require('../controllers/product.controller')

module.exports = (app) => {
    app.post('/api/addProduct', ProductController.addProduct)
    app.get('/api/getAllProducts', ProductController.getAllProducts)
}

