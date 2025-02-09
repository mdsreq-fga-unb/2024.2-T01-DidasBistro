const mongoose = require('mongoose');

const mongourl = process.env.DB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(mongourl,);
    console.log('MongoDB is connected');
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectDB;