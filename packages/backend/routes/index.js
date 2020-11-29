const express = require('express');
const router = express.Router();
const crc32 = require('crc32')

const ShortUrl = require('../models/ShortUrl');

const shortUrlValidator = async (req, res, next) => {
  if(!req.body.fullUrl) {
    res.send({
      message: 'fullUrl is required!'
    }).status(400);
  } else {
    const shortUrlId = crc32(req.body.fullUrl);
    const shortUrl = await ShortUrl.findOne({ _id: shortUrlId });
    if (shortUrl) {
      res.json(shortUrl)
    } else {
      next();
    }
  }
}

router.post('/shortUrls', shortUrlValidator,  async (req, res) => {
  const shortUrl = crc32(req.body.fullUrl);
  const url = await ShortUrl.create({ 
    full: req.body.fullUrl,
    short: shortUrl,
    _id: shortUrl
  });

  res.json(url);
});

module.exports = router;
