const Account = require('../models/Account');

module.exports = {
  index: async (req, res) => {
    let accounts = await Account.find(req.query);
    res.json(accounts);
  },
  create: async (req, res) => {
  await Account.create(req.body);
    res.json('success');
  },
  update: async (req, res) => {
    await Account.findOneAndUpdate(req.query, req.body);
    res.json('success');
  }
};
