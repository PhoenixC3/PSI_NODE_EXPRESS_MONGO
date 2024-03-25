const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: String,
  id: Number,
}, { collection: 'pets' });

module.exports = mongoose.model('Pet', petSchema);
