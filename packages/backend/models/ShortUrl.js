const mongoose = require('mongoose')

const shortUrlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true,
    default: '',
  },
  short: {
    type: String,
    required: true,
    default: '',
  },
  clicks: {
    type: Number,
    required: true,
    default: 0
  },
  _id: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('ShortUrl', shortUrlSchema);