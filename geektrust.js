// Path: geektrust.js
const fs = require("fs");
var gMan = require("./src/gMan");

const filename = process.argv[2];

fs.readFile(filename, "utf8", (err, data) => {
  if (err) throw err;
  var inputArray = data.toString().split("\n");
  console.log("POWER ", gMan.getPowerOfGMan(inputArray))
});
