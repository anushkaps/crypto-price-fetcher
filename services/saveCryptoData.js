const CryptoData = require('../models/CryptoData');

async function saveCryptoData(data) {
  try {
    for (const item of data) {
      // Create a new entry for each fetched data item
      const newCryptoData = new CryptoData({
        name: item.name,
        price_usd: item.price_usd,
        market_cap_usd: item.market_cap_usd,
        change_24h: item.change_24h,
      });

      // Save the new entry
      await newCryptoData.save();
      console.log(`Data for ${item.name} saved successfully.`);
    }
  } catch (error) {
    console.error(`Error saving crypto data: ${error.message}`);
  }
}

module.exports = saveCryptoData;
