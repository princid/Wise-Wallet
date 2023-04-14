const mongoose = require("mongoose");
const dotenv = require("dotenv");

//added this to remove the DeprecationWarning
mongoose.set("strictQuery", true);

// mongoose.set("strictQuery", false);

dotenv.config();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.mjocc.mongodb.net/test`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const connection = mongoose.connection;

connection.on("connected", () => console.log("Mongo DB Connection Successful"));
