//Add your tests here
const  findPassengerCost  = require("./Metrocard/chargesGiven");
var assert = require("assert");

const ADULT = "ADULT";
const SENIOR_CITIZEN = "SENIOR_CITIZEN";
const KID = "KID";
const adultTravelCharges = 200;
const seniorCitizenTravelCharges = 100;
const kidsTravelCharges = 50;
const checkingDifferentCosts = "checking different costs";
describe(checkingDifferentCosts, () => {
  it("checking adult", () => {
    let value = findPassengerCost(ADULT);
    assert.equal(value, adultTravelCharges);
  });

  it("checking senior citizen", () => {
    let value = findPassengerCost(SENIOR_CITIZEN);
    assert.equal(value, seniorCitizenTravelCharges);
  });

  it("checking kid", () => {
    let value = findPassengerCost(KID);
    assert.equal(value, kidsTravelCharges);
  });
});
