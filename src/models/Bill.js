const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BillSchema = new Schema({
  deposit: {
    type: Number,
    min: 0
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Bill', BillSchema);
