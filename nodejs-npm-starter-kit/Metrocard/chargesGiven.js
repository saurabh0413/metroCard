const adultTravelCharges = 200;
const seniorCitizenTravelCharges = 100;
const kidsTravelCharges = 50;
const adultCheck = "ADULT";
const kidsCheck = "KID";
//function to send actual charge per travel based on passengerType
function findPassengerCost(passengerType) {
  if (passengerType == adultCheck) {
    return adultTravelCharges;
  } else if (passengerType == kidsCheck) {
    return kidsTravelCharges;
  } else {
    return seniorCitizenTravelCharges;
  }
}

module.exports =  findPassengerCost ;
