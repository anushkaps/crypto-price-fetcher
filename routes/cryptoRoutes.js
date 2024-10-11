// routes/cryptoRoutes.js
const express = require('express');
const router = express.Router();
const Crypto = require('../models/Crypto');

router.get('/stats', async (req, res) => {
  const coin = req.query.coin?.toLowerCase();
  if (!coin) {
    return res.status(400).json({ error: 'Coin parameter is required.' });
  }

  const validCoins = ['bitcoin', 'matic', 'ethereum'];
  if (!validCoins.includes(coin)) {
    return res.status(400).json({ error: 'Invalid coin requested. Please use bitcoin, matic, or ethereum.' });
  }

  try {
    const cryptoData = await Crypto.findOne({ coin });
    if (!cryptoData) {
      return res.status(404).json({ error: 'Coin data not found.' });
    }

    const response = {
      price: cryptoData.price,
      marketCap: cryptoData.marketCap,
      "24hChange": cryptoData.change24h,
    };

    return res.json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
});

module.exports = router;
