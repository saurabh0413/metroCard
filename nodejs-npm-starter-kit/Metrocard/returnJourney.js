//array to track passenger travel from central to airport or vice versa
let travelledPassengers = [];

//function to find existing or new card
function ReturnJourney(metroCardNumber) {
  if (travelledPassengers.includes(metroCardNumber)) {
    let existingPassenger = travelledPassengers.indexOf(metroCardNumber);
    travelledPassengers.splice(existingPassenger, 1);
    return true;
  }
  travelledPassengers.push(metroCardNumber);
  return false;
}
module.exports =  ReturnJourney ;
