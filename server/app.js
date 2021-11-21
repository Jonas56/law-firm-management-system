const express = require("express");
require("express-async-errors");
const { sequelize } = require("./models");
const caseRouter = require("./routes/cases");
const userRouter = require("./routes/userRouter");
const loginRouter = require("./routes/loginRouter");
const cors = require("cors");

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

app.use("/api/cases", middleware.userAuthentication, caseRouter);
app.use("/api/users", userRouter);
app.use("/api/login", loginRouter);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use(middleware.errorHandling);
module.exports = app;
