const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    }
},{timestamps: true})

const Product = mongoose.model('Product', ProductSchema)
//The first parameter above defined what the schema will be called in our database, the second brings in the schema we created above.

module.exports = Product