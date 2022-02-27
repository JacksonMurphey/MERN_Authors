const mongoose = require('mongoose')
const dbName = "authorsDB"

mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established connection to database: ${dbName}`))
    .catch(err => console.log('Something went wrong while connecting to the database', err))