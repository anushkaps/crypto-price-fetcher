require('dotenv').config(); // Load environment variables

const express = require('express');
const connectDB = require('./config/db');
const fetchCryptoData = require('./services/fetchCryptoData');
const saveCryptoData = require('./services/saveCryptoData');
require('./scripts/cronScheduler'); // Start the cron job
const cryptoRoutes = require('./routes/cryptoRoutes');

const app = express();
const PORT = process.env.PORT || 3000; // Set the port

connectDB(); // Connect to the database

// To run the job immediately once on startup
(async () => {
  try {
    const cryptoData = await fetchCryptoData();
    await saveCryptoData(cryptoData);
  } catch (error) {
    console.error('Error fetching and saving initial data:', error);
  }
})();

app.use('/api', cryptoRoutes); // Use the routes with a base path (e.g., /api/stats)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
