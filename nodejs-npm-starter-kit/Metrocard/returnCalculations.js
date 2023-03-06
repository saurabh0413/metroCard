let findPassengerCost= require("./chargesGiven");
let ReturnJourney  = require("./returnJourney");
let { CardData } = require("./userFun");

const disc = 2;

const extraCharges = 2 / 100;

function travelCost(CardNumber, passenger) {
  let discount = 0;
  let travelCost = findPassengerCost(passenger);

  let returnJourney = ReturnJourney(CardNumber);

  if (returnJourney) {
    discount = Math.floor(travelCost / disc);
    travelCost -= discount;
  }

  if (CardData[CardNumber] < travelCost) {
    let need = travelCost - CardData[CardNumber];
    travelCost += Math.floor(need * extraCharges);
    CardData[CardNumber] += need;
  }
  CardData[CardNumber] -= travelCost;
  return [travelCost, discount];
}

module.exports =  travelCost ;
