const express = require("express");
const { sequelize } = require("./models");
const caseRouter = require("./routes/cases");
const logger = require("./utils/logger");

const app = express();
app.use(express.json());

// Connection to db
const main = async () => {
  try {
    await sequelize.authenticate();
    logger.info("Connection has been established successfully.");
  } catch (error) {
    logger.error("Unable to connect to the database:", error);
  }
};

main();

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.use("/api/cases", caseRouter);

module.exports = app;
