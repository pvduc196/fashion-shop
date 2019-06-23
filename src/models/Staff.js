const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StaffSchema = new Schema({
  fullname: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String
  },
  address: {
    type: String,
    trim: true
  },
  birthday: {
    type: String
  },
  sex: {
    type: Boolean
  },
  _roles: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Role'
    }
  ]
});

module.exports = mongoose.model('Staff', StaffSchema);
