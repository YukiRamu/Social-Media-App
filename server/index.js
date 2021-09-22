//Express.js
const express = require("express");
const app = express();

//dotenv
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 8800;

//Helmet : to secure your Express apps by setting various HTTP headers
const helmet = require("helmet");

//morgan login middleware for node.js
const morgan = require('morgan');

//Mongo DB library : Connection
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log(`Connected to Mongo DB`);
  });

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.get("/", (req, res) => {
  res.send("welcome to homepage");
});

//server listens
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});