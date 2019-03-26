const mongoose = require("mongoose");

mongoose.model('Stream', new mongoose.Schema({
    title: 'string',
    description: 'string',
    userId: 'string',
    id:'string'
  }));

//TODO Validation