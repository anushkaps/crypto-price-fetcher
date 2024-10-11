const mongoose = require('mongoose');

// Check if the model is already defined
const cryptoDataSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  price_usd: { type: Number, required: true },
  market_cap_usd: { type: Number, required: true },
  change_24h: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Use mongoose.models to check if the model exists
const CryptoData = mongoose.models.CryptoData || mongoose.model('CryptoData', cryptoDataSchema);

module.exports = CryptoData;
