const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 4000;
const mongoose = require('mongoose');

// connect to db
mongoose.connect('mongodb://localhost:27017/theProject', { useNewUrlParser: true });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// importing controllers
const UserController = require('./Controllers/UserController');
app.use('/user', UserController);

app.listen(PORT, () => console.log(`listening no port ${PORT}`));