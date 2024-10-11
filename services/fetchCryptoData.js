const axios = require('axios');

async function fetchCryptoData() {
  const ids = ['bitcoin', 'matic-network', 'ethereum'];
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${ids.join(
    ','
  )}&vs_currencies=usd&include_market_cap=true&include_24hr_change=true`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    // Check if data is valid before accessing
    const formattedData = ids.map((id) => ({
      name: id,
      price_usd: data[id]?.usd || 0,
      market_cap_usd: data[id]?.usd_market_cap || 0,
      change_24h: data[id]?.usd_24h_change || 0,
    }));

    return formattedData;
  } catch (error) {
    console.error('Error fetching data from CoinGecko:', error);
    throw error;
  }
}

module.exports = fetchCryptoData;
