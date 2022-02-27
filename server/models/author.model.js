const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'You must provide an Authors Name to Submit'],
        minLength: [3, 'The name must be at least 3 characters']
    },

}, { timestamps: true })

const Author = mongoose.model('Author', AuthorSchema)
module.exports = Author
