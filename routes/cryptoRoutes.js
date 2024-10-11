const express = require('express');
const CryptoData = require('../models/CryptoData'); // Adjust the path as necessary
const router = express.Router();

// Route to get cryptocurrency stats
router.get('/stats', async (req, res) => {
  const { coin } = req.query;

  try {
    const cryptoData = await CryptoData.findOne({ name: coin }); // Use name instead of coin
    if (!cryptoData) {
      return res.status(404).json({ error: "Coin data not found." });
    }

    // Return data according to the new schema
    res.json({
      price: cryptoData.price_usd,           // price in USD
      marketCap: cryptoData.market_cap_usd,   // market cap in USD
      "24hChange": cryptoData.change_24h,     // 24h change
    
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error." });
  }
});

module.exports = router;
