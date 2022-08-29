// import
const mongoose = require("mongoose");
// connect
mongoose.connect("mongodb://localhost:27017/db-mongoose", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// create schema
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Data name tidak ada, please isi ya"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

// create "model" with schema already created
const Fruit = mongoose.model("Fruit", fruitSchema);

// use model "fruit" to create instance of it
const mangga = new Fruit({
  name: "mangga",
  rating: 10,
  review: "Rasanya Manis",
});

// saving "schema" and all "model" with data including
mangga.save(function (error) {
  if (error) {
    console.log(error);
    mongoose.connection.close();
  } else {
    console.log("Berhasil simpan buah apel ke dalam database");
    mongoose.connection.close();
  }
});

// create "many" data and save all at once
// const kiwi = new Fruit({
//   name: "kiwi",
//   rating: 10,
//   review: "Buah yang terbaik",
// });
// const jeruk = new Fruit({
//   name: "jeruk",
//   rating: 5,
//   review: "Asem rasanya",
// });
// const pisang = new Fruit({
//   name: "pisang",
//   rating: 6,
//   review: "Manis dan menyegarkan",
// });

// // saving all & close mongoose connect (if success)
// Fruit.insertMany([kiwi, jeruk, pisang], function (error) {
//   if (error) {
//     console.log(error);
//   } else {
//     mongoose.connection.close();
//     console.log("Berhasil simpan banyak buah sekaligus");
//   }
// });
