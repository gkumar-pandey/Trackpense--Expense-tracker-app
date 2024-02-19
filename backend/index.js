const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDb = require("./config/db");
const routes = require('./routes')

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

connectDb();

app.use('/',routes)


const PORT = process.env.PORT || 5000;

app.listen(() => {
  console.log(`server is running at port:${PORT}`);
});
