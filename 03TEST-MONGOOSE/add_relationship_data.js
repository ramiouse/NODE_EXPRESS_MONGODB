// import
const mongoose = require("mongoose");
// connect
mongoose.connect("mongodb://localhost:27017/db-mongoose", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// fruit schema
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

// create "model fruit"
const Fruit = mongoose.model("Fruit", fruitSchema);

/*--------------------*/
const peopleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Data name tidak ada, please isi ya"],
  },
  age: {
    type: Number,
  },
  favoriteFruit: fruitSchema,
});

// create "model" with schema already created
const People = mongoose.model("People", peopleSchema);

/*--------------------*/

// SET A & B
const fruitAnggur = new Fruit({
  name: "Anggur",
  rating: 8,
  review: "Rasanya Manis",
});

// saving "schema" and all "model" with data including
fruitAnggur.save(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Berhasil simpan buah 'Anggur' ke dalam database");
  }
});

const people = new People({
  name: "radits",
  age: 24,
  favoriteFruit: fruitAnggur,
});

people.save(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log(
      "Berhasil simpan data 'radits' dengan favoriteFruitnya ke database"
    );
  }
});
