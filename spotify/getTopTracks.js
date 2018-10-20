const request = require('request');
const Promise = require('bluebird');

const getTopTracks = (data, token) => {
  return new Promise((resolve, reject) => {
    let options = {
      url: `https://api.spotify.com/v1/artists/${data.urlId}/top-tracks?country=SE`,
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}` 
      }
    };
    request(options, (err, res, body) => {
      if (err) {
        reject(err);
      } else {
        body = JSON.parse(body);
        resolve(body);
      }
    })
  })
};

module.exports = getTopTracks;