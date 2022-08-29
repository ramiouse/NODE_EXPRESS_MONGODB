// import
const mongoose = require("mongoose");
// connect
mongoose.connect("mongodb://localhost:27017/db-mongoose", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// create schema
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

// create "model" with schema already created
const Fruit = mongoose.model("Fruit", fruitSchema);

Fruit.find(function (error, fruits) {
  if (error) {
    console.log(error);
  } else {
    mongoose.connection.close();

    fruits.forEach(function (fruit) {
      console.log(fruit.name);
    });
  }
});
