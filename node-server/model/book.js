const mongoose = require("mongoose");
const schema = mongoose.schema;

let Book = new Schema(
  {
    name: {
      type: String,
    },
    price: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    collection: "books",
  }
);

model.exports = mongoose("Book", Book);
