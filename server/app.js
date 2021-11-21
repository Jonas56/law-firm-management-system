const express = require("express");
require("express-async-errors");
const { sequelize } = require("./models");

const cors = require("cors");
const api = require("./routes/api");


const logger = require("./utils/logger");
const path = require("path");
const middleware = require("./utils/middleware");

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));
app.use(middleware.requestLogger);

// Connection to db
const main = async () => {
  try {
    await sequelize.authenticate();
    logger.info("Connection has been established successfully!");
  } catch (error) {
    logger.error("Unable to connect to the database:", error);
  }
};

main();

app.use("/v1", api);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use(middleware.errorHandling);
module.exports = app;
