const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI; // Use environment variable for URI

async function connectDB() {
  if (mongoose.connection.readyState === 0) {
    try {
      await mongoose.connect(uri); // Removed deprecated options
      console.log('MongoDB connected successfully');
    } catch (error) {
      console.error('MongoDB connection error:', error);
    }
  } else {
    console.log('MongoDB connection already established');
  }
}

module.exports = connectDB;
