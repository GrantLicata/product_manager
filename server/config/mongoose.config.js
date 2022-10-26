const mongoose = require('mongoose')

// Enter the database name below
mongoose.connect('mongodb://localhost/productsdb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("Connected to the products database")
}).catch((err) => {
    console.log(err)
})