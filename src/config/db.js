// database connection file
const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to DB ${mongoose.connection.host}`);
  } catch (error) {
    console.log("Error in DB connection", error);
  }
};

module.exports = { connectDb };
