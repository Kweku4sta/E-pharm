const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

// routes
const productRouter = require("./routes/productRoute");


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to MongoDB cluster");
  app.listen(process.env.PORT, () => {
    console.log("we are listening to the port number ", process.env.PORT);
  });
});

mongoose.connection.on("error", (err) => {
  console.log("Mongoose connection error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected from MongoDB cluster");
});

app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(express.json());
//  app.use("/api/product", 'this  is the site I am expecting to work');
 app.use("/api/e-pharm",productRouter);
