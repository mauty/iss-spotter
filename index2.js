const { fetchMyIP } = require('./iss-promised');
const { fetchCoordsByIP } = require('./iss-promised');
const { fetchISSFlyOverTimes } = require('./iss-promised');
const { nextISSTimesForMyLocation } = require('./iss-promised');
const { printPassTimes } = require('./index')

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });