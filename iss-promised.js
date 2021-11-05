const request = require('request-promise-native');

const url = 'https://api.ipify.org/?format=json';
const fetchMyIP = () => {
  return request(`${url}`);
};


const fetchCoordsByIP = (body) => {
  const ip = JSON.parse(body).ip
  return request(`https://api.freegeoip.app/json/${ip}?apikey=b63c7c60-3dd9-11ec-88b2-2f474cbbbc93`)
}

const fetchISSFlyOverTimes = (body) => {
  const { latitude, longitude } = JSON.parse(body);
  return request(`https://iss-pass.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`)
}

const nextISSTimesForMyLocation = () => {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then(data => {
      const { response } = JSON.parse(data);
      return response;
    });
};

module.exports = {
  nextISSTimesForMyLocation,
}