const { MusicArtist } = require('../database/models');

module.exports = {
  get: (req, res) => {
    res.send('HELLO FROM GET');
  },
  post: (req, res) => {
    res.send('HELLO FROM POST');
  },
  update: (req, res) => {

  },
  delete: (req, res) => {

  }
    
};