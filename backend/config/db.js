const mongoose = require('mongoose');

const mongourl = `mongodb://root:admin123@DidasBistro-db:27017/`

const connectDB = async () => {
  try {
    await mongoose.connect(mongourl,);
    console.log('MongoDB is connected');
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectDB;