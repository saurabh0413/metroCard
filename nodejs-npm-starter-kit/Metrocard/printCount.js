const checkCount = 0;
function printPassengerCount(res) {
  let toPrint = [];
  toPrint.push(["ADULT", res.ADULT]);
  toPrint.push(["KID", res.KID]);
  toPrint.push(["SENIOR_CITIZEN", res.SENIOR_CITIZEN]);
  toPrint.sort((a, b) => b[1] - a[1]);
  toPrint.forEach(([passenger, count]) => {
    if (count != checkCount) {
      console.log(passenger, count);
    }
  });
}
module.exports = printPassengerCount;
