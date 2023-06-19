// import mongoose
const mongoose = require("mongoose");
require("dotenv").config({ path: ".env" });

// connect to mongodb
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
module.exports = connectDB;
