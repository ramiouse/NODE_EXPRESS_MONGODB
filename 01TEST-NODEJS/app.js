/* copy files text to other */
// const fs = require("fs");
// fs.copyFileSync("text.txt", "text-2.txt");

/* create & user module "superheroes" */
// const hero = require("superheroes");
// const nameHero = hero.random();
// for (let index = 0; index < 10; index++) {
//   console.log(hero.random());
// }

/* export module */
const op = require("./module");
const moduleTambah = op.tambah(10, 5);
const moduleKali = op.kali(10, 5);
const moduleTitle = op.title;
// create as object
const data = {
  moduleTambah,
  moduleKali,
  moduleTitle,
};

// create as array object
const data_2 = [
  {
    moduleTambah,
    moduleKali,
    moduleTitle,
  },
];

// console.log(data_2[0].moduleTambah);
