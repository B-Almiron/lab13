const mongoose = require('mongoose');

const celuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  marca: { type: String, required: true },
  ram: { type: String, required: true },
  date: { type: String, required: true },

});

module.exports = mongoose.model('Item', celuSchema);
