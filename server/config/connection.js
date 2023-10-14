const mongoose = require("mongoose");
//connect to mongoDB Atlas database if MONGODB_URI present else connect to local database
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/googlebooks"
);

module.exports = mongoose.connection;
