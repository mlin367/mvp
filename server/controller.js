const { MusicArtist } = require('../database/models');
const getArtistInfo = require('../spotify/spotify.js');
const getKey = require('../config');


module.exports = {
  get: (req, res) => {
    MusicArtist.findAll({})
      .then(artists => {
        res.status(200).send(artists);
      })
      .catch(err => console.error(err));
  },
  post: (req, res) => {
    // Call spotify API with GET and then store it in database
    let artist = req.body.name;
    getKey()
      .then(token => {
        getArtistInfo(artist, token)
        .then(info => {
          res.send(info)
        })
      })
  },
  update: (req, res) => {

  },
  delete: (req, res) => {

  }
    
};