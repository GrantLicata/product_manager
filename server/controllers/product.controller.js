//Import the associated model and route files
const Product = require('../models/product.model')
const productRoutes = require('../routes/product.routes')

// Create an object whos keys are the method name and the value being a call back function contining the desired action to be completed on the database.
module.exports = {
    addProduct: (req,res) => {
        Product.create(req.body)
        .then((results) => {
            res.json(results)
        }).catch((error) => {
            console.log(error)
        })
    },
    getAllProducts: (req,res) => {
        Product.find()
        .then((results) => {
            res.json(results)
        }).catch((error) => {
            console.log(error)
        })
    },
    getOneProduct: (req,res) => {
        Product.findById(req.params.id)
        .then((results) => {
            res.json(results)
        }).catch((error) => {
            console.log(error)
        })
    },
    updateProduct: (req,res) => {
        Product.updateOne({id: req.params.id}, req.body)
        .then((results) => {
            res.json(results)
        }).catch((error) => {
            console.log(error)
        })
    }

}