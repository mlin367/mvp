const Promise = require('bluebird');
const clientId = '';
const clientSecret = '';
const payload = clientId + ":" + clientSecret;
const encodedPayload = new Buffer(payload).toString("base64");

const request = require('request');

const getAccessToken = () => {
  return new Promise((resolve, reject) => {
    const options = {
      url: 'https://accounts.spotify.com/api/token',
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": `Basic ${encodedPayload}`
      },
      body: "grant_type=client_credentials"
    };
    request(options, (err, res, body) => {
      if (err) {
        reject(err);
      } else {
        body = JSON.parse(body)['access_token'];
        resolve(body);
      }
    })
  })
}

module.exports = getAccessToken;
