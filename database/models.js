const Sequelize = require('sequelize');
const connection = require('./index');

const MusicArtist = connection.define('mArtist', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: Sequelize.STRING, allowNull: false} ,
  followers: { type: Sequelize.INTEGER },
  urlId: { type: Sequelize.STRING },
  genres: { type: Sequelize.STRING },
  image: { type: Sequelize.STRING },
  topTracks: { type: Sequelize.STRING }  
}, {
  timestamps: false
});

connection.sync()
  .then(console.log('MySQL database synced'))
  .catch(err => console.error('Failed to sync MySQL database'));

module.exports = { MusicArtist };