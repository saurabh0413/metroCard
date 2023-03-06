//function to print data of central and airport total collection and count of different passengers
let printPassengerCount = require("./printCount");
function printDetails(stationType, stationDetails) {
  console.log(
    `TOTAL_COLLECTION ${stationType} ${stationDetails.total} ${stationDetails.discount}`
  );
  console.log("PASSENGER_TYPE_SUMMARY");
  printPassengerCount(stationDetails);
}

module.exports = printDetails;
