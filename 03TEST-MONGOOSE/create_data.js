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

// // use model "fruit" to create instance of it
// const apple = new Fruit({
//   name: "Apple",
//   rating: 8,
//   review: "Rasanya Manis",
// });

// // saving "schema" and all "model" with data including
// apple.save(function (error) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Berhasil simpan buah apel ke dalam database");
//   }
// });

// create "many" data and save all at once
const kiwi = new Fruit({
  name: "kiwi",
  rating: 10,
  review: "Buah yang terbaik",
});
const jeruk = new Fruit({
  name: "jeruk",
  rating: 5,
  review: "Asem rasanya",
});
const pisang = new Fruit({
  name: "pisang",
  rating: 6,
  review: "Manis dan menyegarkan",
});

// saving all & close mongoose connect (if success)
Fruit.insertMany([kiwi, jeruk, pisang], function (error) {
  if (error) {
    console.log(error);
  } else {
    mongoose.connection.close();
    console.log("Berhasil simpan banyak buah sekaligus");
  }
});
