const Sequelize = require('sequelize');
const connection = new Sequelize('mArtists', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

connection
  .authenticate()
  .then(() => {
    console.log('Connected to mySQL');
  })
  .catch(err => {
    console.error('Unable to connect to the database: ', err);
  });

module.exports = connection;