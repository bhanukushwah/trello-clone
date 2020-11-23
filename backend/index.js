const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const routes = require("./src/routes/");

// create an app instance
const app = express();

// create a router instance
const router = express.Router();

// connect to database
mongoose.connect(
  `${process.env.DATABASE_URL}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  () => {
    console.log("db is up!");
  }
);

//middlewares
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());
app.use(router);

// routes
app.use("/api", routes);

// Define port for the server
const PORT = process.env.PORT || 8000;

// creating a server listening at port PORT
app.listen(PORT, () => {
  console.log("server is up and running");
});
