const express = require('express');
const { connect } = require('mongoose');
const connectDB = require('./config/db');
const cors = require('cors')

const app = express();
require('dotenv').config();

app.use(express.json());
app.use(cors({
  origin: "*"
}))

app.use('/', require('./router/router'));

const port = 3000;

connectDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});