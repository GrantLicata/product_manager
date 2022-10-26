const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8000
require('./config/mongoose.config')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors({
        origin: 'http://localhost:3000',
    })
)

const Routes = require('./routes/product.routes')(app)

app.listen(PORT, ()=> {
    console.log(`Server is up on port ${PORT}`)
})