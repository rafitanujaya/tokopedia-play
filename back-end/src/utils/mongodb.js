require("dotenv").config();
const mongoose = require("mongoose");
const mongooseString = process.env.DATABASE_URL;

async function connectDatabase() {
  try {
    await mongoose.connect(mongooseString);
    console.log("Database Connected");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    process.exit(1);
  }
}

module.exports = connectDatabase;
