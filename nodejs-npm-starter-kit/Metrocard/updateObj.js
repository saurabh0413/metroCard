//function to update data according to above calculations
function finalCalculation(station, type, value) {
  station[type] += value;
}

module.exports =  finalCalculation ;
