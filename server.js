const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();


const PORT = 4000;
const DB_URL = "mongodb://localhost:27017/studentapp";


app.use(cors());
app.use(bodyParser.json());


mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once("open", () => {
 console.log("MongoDB database connection established successfully");
});


app.listen(PORT, () => {
 console.log(`Server is running on port: ${PORT}`);
});