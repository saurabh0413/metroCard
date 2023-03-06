const fs = require("fs");
let MetroCard = require("./Metrocard/costCalculations");
const printDetails = require("./Metrocard/printData");
const filename = process.argv[2];

fs.readFile(filename, "utf8", (err, data) => {
  if (err) throw err;
  var inputLines = data.toString().split("\n");

  let [CENTRAL, AIRPORT] = MetroCard(inputLines);

  printDetails("CENTRAL", CENTRAL);
  printDetails("AIRPORT", AIRPORT);
});
