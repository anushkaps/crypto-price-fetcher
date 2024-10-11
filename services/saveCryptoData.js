const CryptoData = require('../models/cryptoData');

async function saveCryptoData(cryptoDataArray) {
  try {
    const savePromises = cryptoDataArray.map(async (cryptoData) => {
      await CryptoData.updateOne(
        { name: cryptoData.name },
        { $set: cryptoData },
        { upsert: true } // Upsert option to create if not exists
      );
    });

    await Promise.all(savePromises);
    console.log('Crypto data saved successfully');
  } catch (error) {
    console.error('Error saving crypto data:', error);
    throw error;
  }
}

module.exports = saveCryptoData;
