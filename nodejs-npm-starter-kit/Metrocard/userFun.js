let CardData = {};
function createCardData(singleTravel) {
  let [, metroCardNumber, balanceInMetroCard] = singleTravel;
  CardData[metroCardNumber] = +balanceInMetroCard;
}

module.exports = { CardData, createCardData };
