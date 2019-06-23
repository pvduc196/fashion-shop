const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Connected to MongoDB');
});

connection.on('error', err => console.error(err));

module.exports = mongoose;
