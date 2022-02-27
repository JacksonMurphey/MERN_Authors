const Author = require('../models/author.model')


module.exports = {

    createAuthor:
        (req, res) => {
            Author.create(req.body)
                .then((newAuthor) => {
                    res.json(newAuthor)
                })
                .catch(err => {
                    console.log('Creating an author Failer')
                    res.status(400).json({ message: 'Error in creating a new Author', error: err })
                })
        },

    findAllAuthors:
        (req, res) => {
            Author.find().collation({ locale: 'en', strength: 2 }).sort({ name: 1 })

                .then((allAuthors) => res.json(allAuthors))
                .catch(err => {
                    console.log('Find All Failed')
                    res.json({ message: 'Error in find all authors', error: err })
                })
        },

    findOneAuthor:
        (req, res) => {
            Author.findById({ _id: req.params.id })
                .then((oneAuthor) => res.json(oneAuthor))
                .catch(err => {
                    console.log('Find one Failed')
                    res.json({ message: 'Error in finding one author', error: err })
                })
        },

    updateOneAuthor:
        (req, res) => {
            Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
                .then((updatedAuthor) => res.json(updatedAuthor))
                .catch((err => {
                    console.log('Updating Author Failed')
                    res.status(400).json({ message: 'Error in updating the author', error: err })
                }))
        },

    deleteOneAuthor:
        (req, res) => {
            Author.deleteOne({ _id: req.params.id })
                .then((deletedAuthor) => res.json(deletedAuthor))
                .catch(err => {
                    console.log('Deleting author Failed')
                    res.json({ message: "Error in deleting the author", error: err })
                })
        }
}