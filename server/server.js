const express = require('express')
const cors = require('cors')
const app = express()
const port = 8000

// -- middleware -- 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: 'http://localhost:3000' }))

//-- add config -- 
require('./config/mongoose.config')

//-- add require routes below -- 
require('./routes/author.routes')(app)



app.listen(port, () => console.log(`Listening on port: ${port}`))

