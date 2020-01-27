const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema ({
    id: Number,
    title:String,
    authors:String,
    description:String,
    image:String,
    link:String,
})

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;