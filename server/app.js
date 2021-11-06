const express = require("express");
const { sequelize } = require("./models");
const caseRouter = require("./routes/cases");
const logger = require("./utils/logger");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

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

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

module.exports = app;
