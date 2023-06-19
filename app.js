const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const router = require("./routes/index");
const errorHandler = require('./utils/errorHandler')


// Here is our application
const app = express();

// Here is our middleware
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(cors());

// Here is our routes
app.use("/api/v1", router);

// Here is our error handler
app.use(errorHandler);



module.exports = app;
