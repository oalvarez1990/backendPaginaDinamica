// conection with mysql
// const app = require("./app");
// const sequelize = require("./utils/connection");

// const PORT = process.env.PORT || 8080;

// const main = async () => {
//   try {
//     await sequelize.sync();
//     app.listen(PORT);
//     console.log(`Server is up on port ${PORT}`);
//   } catch (error) {
//     console.log(error);
//   }
// };
// main();

// conection with mongodb
// const express = require("express");
const app = require("./app");
// const mongoose = require("mongoose");
// const connectDB = require("./utils/connection");
const connectDB = require("./config/db");
const setup= require('./routes/swagger')

const PORT = process.env.PORT || 8080; // Define el número de puerto que deseas utilizar

connectDB();

// mongoose.connection.once("open", () => {
//   console.log("Connected to MongoDB ok");
// });

// mongoose.connection.on("error", (err) => {
//   console.error(err);
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  setup(app, PORT);
});
