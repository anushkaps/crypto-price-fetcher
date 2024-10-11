const cron = require('node-cron');
const fetchCryptoData = require('../services/fetchCryptoData');
const saveCryptoData = require('../services/saveCryptoData');
const connectDB = require('../config/db');

// Connect to MongoDB
connectDB();

// Background job runs every 2 hours
cron.schedule('0 */2 * * *', async () => {
  try {
    const cryptoData = await fetchCryptoData();
    await saveCryptoData(cryptoData);
  } catch (error) {
    console.error('Error in scheduled task:', error);
  }
});

console.log('Crypto price fetcher running...');
