const ProductController = require('../controllers/product.controller')

module.exports = (app) => {
    app.post('/api/addProduct', ProductController.addProduct)
    app.get('/api/getAllProducts', ProductController.getAllProducts)
    app.get('/api/getOneProduct/:id', ProductController.getOneProduct)
    app.put('/api/updateProduct/:id', ProductController.updateProduct)
    app.delete('/api/delete/:id', ProductController.deleteProduct)
}

