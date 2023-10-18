const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const port = process.env.PORT || 9000;

// milldeware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Product Server is Running");
});

app.listen(port, () => {
  console.log("Product server is running on port: ", port);
});
