const db = require('../models');
const axios = require('axios');

module.exports ={
    searchBook: function(req, res) {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.query.q}&key=`)
        .then(results => {
            res.json([...results.data.items])})
        .catch(err => console.log(err));
    },
    create: function(req, res) {
        console.log(req.body)
        db.Book.create(req.body)
        .then(dbModel => res.send(dbModel))
          .catch(err => res.status(422).json(err.response));
    },
    findBook: function(req, res) {
        db.Book.find(req.query).sort({ date: -1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    
    remove: function(req, res) {
        db.Book.findById({ _id: req.params.id }).then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    }
    
    
}