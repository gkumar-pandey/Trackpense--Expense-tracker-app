const mongoose = require("mongoose");

const connectDb = async () => {
  const DB_USER = process.env.DB_USER;
  const DB_PASSWORD = process.env.DB_PASSWORD;
  const DB_URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.2jzodab.mongodb.net/?retryWrites=true&w=majority`;
  try {
    const connect = await mongoose.connect(DB_URL);
    console.log("Database connected successfully.");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;