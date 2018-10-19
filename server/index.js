const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const connnection = require('../database');
const router = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/', router);


const port = 3000;
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});