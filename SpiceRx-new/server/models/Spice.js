const mongoose = require('mongoose');

const spiceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  origin: String,
  imageUrl: String,
});

module.exports = mongoose.model('Spice', spiceSchema);