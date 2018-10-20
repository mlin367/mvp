const { MusicArtist } = require('../database/models');
const getArtistInfo = require('../spotify/spotify.js');
const getTopTracks = require('../spotify/getTopTracks.js');
const getToken = require('../config');

module.exports = {
  get: (req, res) => {
    MusicArtist.findAll({})
      .then(artists => {
        res.status(200).send(artists);
      })
      .catch(err => console.error(err));
  },
  post: (req, res) => {
    // Call spotify API with helper functions and then store it in database
    let artist = req.body.name;
    getToken()
      .then(token => {
      getArtistInfo(artist, token)
      .then(info => {
        let data = {
          name: info.artists.items[0].name,
          followers: info.artists.items[0].followers.total,
          urlId: info.artists.items[0].id,
          genres: JSON.stringify(info.artists.items[0].genres),
          image : info.artists.items[0].images[2].url
        }
        getTopTracks(data, info.token)
        .then(topTrackInfo => {

        })
        MusicArtist.create(data)
          .then(newArtist => {
            res.status(201).send('post sucess')
          })
          .catch(err => console.error(err));
      })
    })
  },
  delete: (req, res) => {
    let artist = req.query.name;
    MusicArtist.destroy({
      where: { name: artist }
    })
    .then(deletedArtist => {
      res.status(202).send(`${artist} deleted`);
    })
    .catch(err => console.error(err));
  }
    
};