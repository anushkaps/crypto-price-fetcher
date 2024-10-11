require('dotenv').config(); // Load environment variables

const connectDB = require('./config/db');
const fetchCryptoData = require('./services/fetchCryptoData');
const saveCryptoData = require('./services/saveCryptoData');
require('./scripts/cronScheduler'); // Start the cron job

// To run the job immediately once on startup
(async () => {
  try {
    const cryptoData = await fetchCryptoData();
    await saveCryptoData(cryptoData);
  } catch (error) {
    console.error('Error fetching and saving initial data:', error);
  }
})();
