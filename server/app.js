const express = require("express");
require("express-async-errors");
const { sequelize } = require("./models");
const caseRouter = require("./routes/cases");
const logger = require("./utils/logger");
const path = require("path");
const middleware = require("./utils/middleware");

const app = express();
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

app.use("/api/cases", caseRouter);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use(middleware.errorHandling);
module.exports = app;
