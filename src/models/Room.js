const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  status: {
    type: Boolean
  }
});

module.exports = mongoose.model('Room', RoomSchema);
