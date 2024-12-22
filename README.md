# Crypto Price Fetcher

## Overview
The **Crypto Price Fetcher** is a Node.js application that fetches the current prices, market caps, and 24-hour changes of selected cryptocurrencies (Bitcoin, Matic, and Ethereum) from the CoinGecko API. The data is stored in a MongoDB database, and a background job updates the data every two hours. This project also exposes several API endpoints to retrieve the latest data and calculate price deviations.

## Features
- Fetches current price in USD, market cap in USD, and 24-hour change for Bitcoin, Matic, and Ethereum.
- Stores fetched data in MongoDB.
- Scheduled background job that runs every two hours to update data.
- Exposes API endpoints to:
  - Fetch the latest data for a requested cryptocurrency.
  - Calculate the standard deviation of the price for the last 100 records of a cryptocurrency.

## Tasks Implemented
1. **Task 1**: Implemented a background job that fetches the current price, market cap, and 24-hour change for Bitcoin, Matic, and Ethereum from the CoinGecko API. The data is stored in the database, and the job runs every two hours to update the data.
   
2. **Task 2**: Created an API endpoint `/stats` that returns the latest data for a requested cryptocurrency (Bitcoin, Matic, or Ethereum). It includes the price, market cap, and 24-hour price change.

3. **Task 3**: Created an API endpoint `/deviation` that calculates the standard deviation of the price for the requested cryptocurrency over the last 100 records stored in the database.

## Screenshots
![image](https://github.com/user-attachments/assets/5fece495-d3e5-4870-bd0d-9bbf68a6fcbf)

![image](https://github.com/user-attachments/assets/f27dc41e-1422-42a9-951d-5a081de6eebe)



## Technologies Used
- **Node.js**: JavaScript runtime for building the application.
- **Express.js**: Web framework for Node.js (optional if you implement API endpoints).
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Axios**: Promise-based HTTP client for making API requests.
- **Cron**: Task scheduler for Node.js to run jobs at scheduled intervals.
- **MongoDB Atlas**: Cloud database service for MongoDB.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- MongoDB Atlas account (for database hosting)
- An API key from CoinGecko (if required in the future)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/anushkaps/crypto-price-fetcher.git
   cd crypto-price-fetcher
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables (Create a `.env` file in the root of the project and add your MongoDB URI:):
   ```bash
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.ysrps.mongodb.net/Crypto-API?retryWrites=true&w=majority
   ```

4. Start the application:
   ```bash
   node index.js
   ```

### Usage
- The application will start fetching cryptocurrency data and store it in the MongoDB database.
- To view the stored data, you can check your MongoDB Atlas dashboard.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bugs.

## Acknowledgments
- [CoinGecko API](https://coingecko.com/en/api) for providing cryptocurrency data.
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for cloud database services.
