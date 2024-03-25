const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema({
  name: String,
  id: Number,
}, { collection: 'heros' });

module.exports = mongoose.model('Hero', heroSchema);
