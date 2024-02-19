const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDb = require("./config/db");
const routes = require("./routes");
const {
  globalErrorHandlerMiddleware,
  pageNotFoundErrorHandlerMiddleware,
} = require("./middleware");

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
connectDb();

app.use("/", routes);
 

app.use(globalErrorHandlerMiddleware);
app.use(pageNotFoundErrorHandlerMiddleware);

app.listen(PORT, () => {
  console.log(`server is running at port:${PORT}`);
});
