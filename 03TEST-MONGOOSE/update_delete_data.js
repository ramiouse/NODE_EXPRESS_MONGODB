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

// update data by "id"
// Fruit.updateOne(
//   { id: "630c223ee3d40ac7ac30efc9" },
//   { name: "manggamadu" },
//   function (error) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Berhasil update data name mangga ke nanas");
//     }
//   }
// );

// delete data by "id"
// Fruit.deleteOne({ id: "630c223ee3d40ac7ac30efc9" }, function (error) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Berhasil delete data name manggamadu..");
//   }
// });

Fruit.find(function (error, fruits) {
  if (error) {
    console.log(error);
  } else {
    mongoose.connection.close();

    console.log("Nama-nama buah setelah data di didelete :");
    let i = 0;
    fruits.forEach(function (fruit) {
      console.log(`${i + 1}. ${fruit.name}`);
      i++;
    });
  }
});
