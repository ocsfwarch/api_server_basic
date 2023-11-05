const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const express = require("express");
const cors = require("cors");

const testRouter = require("./api/test_api/test_router");
const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/test", testRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
