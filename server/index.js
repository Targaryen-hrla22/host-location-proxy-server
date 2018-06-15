const express = require('express');
const path = require('path');
const parser = require('body-parser');
const cors = require('cors');

const PORT = 3000;
const app = express();

app.use(cors());

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../static")));

app.listen(PORT, (err) => {
  if(err) {
    console.log('error =', error);
  } else {
    console.log('successfully connected to server');
  }
})
