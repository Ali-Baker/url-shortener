import express, { Request, Response, NextFunction } from 'express';

const crc32 = require('crc32');
const router = express.Router();
const ShortUrl = require('../models/ShortUrl');

const shortUrlValidator = async (req: Request, res: Response, next: NextFunction) => {
  if(!req.body.fullUrl) {
    res.send({
      message: 'fullUrl is required!'
    }).status(400);
  } else {
    const shortUrlId = crc32(req.body.fullUrl);
    const shortUrl = await ShortUrl.findOne({ _id: shortUrlId });
    if (shortUrl) {
      res.json({
        ...shortUrl,
        duplicate: true,
      })
    } else {
      next();
    }
  }
}

router.post('/shorten', shortUrlValidator,  async (req: Request, res: Response) => {
  const shortUrl = crc32(req.body.fullUrl);
  const url = await ShortUrl.create({ 
    full: req.body.fullUrl,
    short: shortUrl,
    _id: shortUrl,
    timestamp: Date.now(),
  });

  res.json(url);
});

router.get('/all', async (req: Request, res: Response) => {
  const all = await ShortUrl.find({});

  res.json(all);
});

module.exports = router;
