const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    min: 0,

  }
});

module.exports = mongoose.model('Service', ServiceSchema);
