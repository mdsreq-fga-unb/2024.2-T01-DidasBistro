const express = require('express');
const { connect } = require('mongoose');
const connectDB = require('./config/db');
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173"
}))

app.use('/', require('./router/router'));

const port = 3000;

connectDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});