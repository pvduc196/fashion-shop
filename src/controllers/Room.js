const Room = require('../models/Room');

module.exports = {
  index: async (req, res) => {
    let rooms = await Room.find(req.query);
    res.json(rooms);
  },
  create: async (req, res) => {
    await Room.create(req.body);
    res.json('success');
  },
  update: async (req, res) => {
    await Room.findOneAndUpdate(req.query, req.body);
    res.json('success')
  }
};
