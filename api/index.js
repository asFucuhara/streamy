const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoURI } = require("./config/keys");


require('./models/stream');
mongoose.Promise = global.Promise;
mongoose.connect(mongoURI, { useNewUrlParser: true });

const streamRoute = require('./routes/stream');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(bodyParser.json())
app.use('/api/streams/', streamRoute);

app.listen(3001,() => console.log('App listening on port 3001'))
