const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 4000;
const path = require('path');
const mongoose = require('mongoose');

// connect to db
mongoose.connect(
  'mongodb://patitas:Chatita2018@ds141294.mlab.com:41294/heroku_p9m6t1b5',
  { useNewUrlParser: true }
);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/dist/the-project'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/the-project-patitas/index.html'));
});

// importing controllers
const UserController = require('./Controllers/UserController');
app.use('/user', UserController);

app.listen(PORT, () => console.log(`listening no port ${PORT}`));
