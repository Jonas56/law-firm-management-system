const express = require("express");
const { sequelize } = require("./models");
const caseRouter = require("./routes/cases");

const app = express();
app.use(express.json());

// Connection to db
const main = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

main();

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.use("/api/cases", caseRouter);

module.exports = app;
