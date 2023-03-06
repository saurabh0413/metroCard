let travelCost = require("./returnCalculations");
const Passenger = require("./stationDetails");
const { createCardData } = require("./userFun");
const finalCalculation = require("./updateObj");

//central and airport objects created using class Passenger

const stationName = "CENTRAL";
const BALANCE = "BALANCE";
const CHECK_IN = "CHECK_IN";
let CENTRAL = new Passenger();
let AIRPORT = new Passenger();

//function to calculate costs,count
function MetroCard(data) {
  data.map((travel) => {
    travel = travel.split("\r")[0].split(" ");

    if (travel[0] == BALANCE) {
      createCardData(travel);
    }

    if (travel[0] == CHECK_IN) {
      let [, CardNumber, passenger, station] = travel;
      let [finalCost, discount] = travelCost(CardNumber, passenger);
      let lastStation = station == stationName ? CENTRAL : AIRPORT;

      finalCalculation(lastStation, passenger, 1);
      finalCalculation(lastStation, "total", finalCost);
      finalCalculation(lastStation, "discount", discount);
    }
  });
  return [CENTRAL, AIRPORT];
}

module.exports = MetroCard;
