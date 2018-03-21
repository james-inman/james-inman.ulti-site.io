const express = require('express');
const mongo = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();

const port = 8000;

app.listen(port, () => {
  console.log('We are live on ' + port);
});
