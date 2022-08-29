const express = require("express");
const app = express();
const port = 3000;

app.set("views", "./views"); // specify the views directory
app.set("view engine", "ejs"); // register the template engine

// url get dengan route name "/" kirim response data  "Hello world"
app.get("/", (req, res) => {
  const buah = [{ name: "apel" }, { name: "melon" }, { name: "mangga" }];

  // render directory view nya (registrasi template engine ejs)
  res.render("index", {
    name: "ganda anggara",
    umur: 23,
    buah: buah,
  });
});

// send with parameter
app.get("/:name", (req, res) => res.send(`Nama Saya : ${req.params.name}`));

// create server connection with port anda callback function to get response of it
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

// kendala kalo mau liat pergantian harus panggil ulang file & restar web
// fix : pake nodemon
