const Sequelize = require('sequelize');
const connection = require('./index');

const MusicArtist = connection.define('mArtist', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: Sequelize.STRING, allowNull: false} ,
  listeners: { type: Sequelize.INTEGER },
  plays: { type: Sequelize.INTEGER },
  genres: { type: Sequelize.STRING }
})

connection.sync()
  .then(console.log('MySQL database synced'))
  .catch(err => console.err('Failed to sync MySQL database'));

module.exports = { MusicArtist };