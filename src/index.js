const mongoose = require('mongoose');
const express = require('express');
const app = express();
const MONGO_DB = 'test';

const url = `mongodb://admin:secret@mongo:27017/${MONGO_DB}?authSource=admin`;

const PORT = process.env.PORT || 8000;

mongoose.connect(url, {
  useNewUrlParser: true,
}, (err) => {
  if (err) {
    console.log('Error during connection', err);
  } else {
    console.log('Success connected to database');
  }
});

app.get('/api', (req, res) => {
  res.send('Hello, world!!!!');
});

app.listen(PORT, () => console.log(`Server up and running on port: ${PORT}`));
