const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const connectCloudinary = require("./config/cloudinary");
require("dotenv").config();

//app config
const app = express();
const PORT = process.env.PORT || 4000;
connectDB();
connectCloudinary();

//middlewares
app.use(express.json());
app.use(cors());

//api endpoints
app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
