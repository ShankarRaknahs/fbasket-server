const mongoose = require("mongoose");
const conf = require("../../config/app.config");

const connectDB = async (env) => {
  try {
    const conn = await mongoose.connect(conf[env].mongodb_url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
