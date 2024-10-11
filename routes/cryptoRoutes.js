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

// Helper function to calculate standard deviation
function calculateStandardDeviation(prices) {
  const mean = prices.reduce((sum, price) => sum + price, 0) / prices.length;
  const variance = prices.reduce((sum, price) => sum + Math.pow(price - mean, 2), 0) / prices.length;
  return Math.sqrt(variance);
}

router.get('/deviation', async (req, res) => {
    const { coin } = req.query;
  
    try {
      const cryptoData = await CryptoData.find({ name: coin })
        .sort({ createdAt: -1 })
        .limit(100);
  
      if (cryptoData.length === 0) {
        return res.status(404).json({ error: 'No data found for the specified cryptocurrency.' });
      }
  
      const prices = cryptoData.map(record => record.price_usd);
      const deviation = calculateStandardDeviation(prices);
  
      res.json({ deviation: deviation.toFixed(2) });
    } catch (error) {
      console.error('Error fetching deviation:', error);
      res.status(500).json({ error: 'An error occurred while fetching the deviation.' });
    }
  });

module.exports = router;
