const request = require('request');
const Promise = require('bluebird');
const getKey = require('../config');

const getArtistInfo = (artist, token) => {
  let options;
  artist = encodeURIComponent(artist.trim());
  return new Promise((resolve, reject) => {
    options = {
      url: `https://api.spotify.com/v1/search?q=${artist}&type=artist&market=US&limit=1`,
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
        resolve(body);
      }
    })
  })
};

module.exports = getArtistInfo;