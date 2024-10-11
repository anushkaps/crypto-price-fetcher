const mongoose = require('mongoose');

const cryptoDataSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  price_usd: { type: Number, required: true },
  market_cap_usd: { type: Number, required: true },
  change_24h: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const CryptoData = mongoose.model('CryptoData', cryptoDataSchema);
module.exports = CryptoData;
