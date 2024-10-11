const mongoose = require('mongoose');

const cryptoDataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price_usd: { type: Number, required: true },
  market_cap_usd: { type: Number, required: true },
  change_24h: { type: Number, required: true },
});

const CryptoData = mongoose.model('CryptoData', cryptoDataSchema);

module.exports = CryptoData; // Export the model directly
