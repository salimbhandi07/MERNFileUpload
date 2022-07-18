'use strict';
const mongoose = require('mongoose');

module.exports = () => {
  mongoose
    .connect(process.env.MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    })
    .then(() => console.log('DB CONNECTED...'));
};
