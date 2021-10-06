//Express.js
const express = require("express");
const app = express();
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");

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
    console.log(`!!!! Connected to Mongo DB!!!!`);
  });

//middleware - use router
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

//configure router
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

//server listens
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});