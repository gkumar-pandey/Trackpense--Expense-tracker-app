const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDb = require("./config/db");

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

connectDb();

console.log("Hello express")


const PORT = process.env.PORT || 5000;

app.listen(() => {
  console.log(`server is running at port:${PORT}`);
});
