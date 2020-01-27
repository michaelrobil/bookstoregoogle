const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bookstore");

const productsSeed = [
  {
    title: "Hello World",
    authors: "Walmart",
    description:
      "Welcome to your first post! To create posts create a title and body. Don't forget to include your screen name!",
    image: "https://placekitten.com/200/300",
    link:"empty link",
    post_date: new Date(Date.now())
  }
];

db.Book.remove({})
  .then(() => db.Book.collection.insertMany(productsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
